import React from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import { addTodo } from '../actions/todoActions'

let AddTodo = ({ authenticated, uid, dispatch }) => {
  if (!authenticated) {
    return '';
  }
  let input

  return (
    <div>
      <form
        onSubmit={ e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(uid, input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  uid: PropTypes.string
}

const mapStateToProps = state => ({
  authenticated: !isEmpty(state.firebase.auth),
  uid: state.firebase.auth.uid
})

AddTodo = connect(mapStateToProps)(AddTodo)

export default AddTodo;

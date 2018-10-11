import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTodo } from '../../actions/todoActions'

let AddTodo = ({authUid, dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={ e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(authUid, input.value))
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
  authUid: PropTypes.string.isRequired
}

const mapStateToProps = ({firebase: {auth: {uid}}}) => ({
  authUid: uid
})

AddTodo = connect(
  mapStateToProps
)(AddTodo)

export default AddTodo;

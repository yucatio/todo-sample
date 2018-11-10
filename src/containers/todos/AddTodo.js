import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { addTodo } from '../../actions/todoActions'

const AddTodo = ({uid, dispatch }) => {
  let input;

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
        <TextField
          inputRef={node => {
            input = node
          }}
        />
        <Button variant="contained" type="submit">
          タスクを追加
        </Button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  uid: PropTypes.string.isRequired
}

export default connect()(AddTodo)

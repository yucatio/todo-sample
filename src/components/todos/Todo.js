import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({isOwnTodos, onClick, completed, text}) => (
  <li
    onClick={isOwnTodos ? onClick : (() => {})}
    style={ {textDecoration: completed ? 'line-through' : 'none'
    }}
    >
    {text}
  </li>
)

Todo.propTypes = {
  isOwnTodos: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;

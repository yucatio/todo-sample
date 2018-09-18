import React from 'react'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => {
  if (!isLoaded(todos)) {
    return <div>Loading...</div>
  }
  if (isEmpty(todos)) {
    return <div>Todos List Is Empty</div>
  }

  return (<ul>
    {Object.keys(todos).map(
        (key) => (
          <Todo key={key} {...todos[key]} onClick={() => onTodoClick(key)}/>
        )
      )}
  </ul>)
}

TodoList.propTypes = {
  todos: PropTypes.object,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;

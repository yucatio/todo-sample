import React from 'react'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({uid, todos, onTodoClick}) => {
  if (!isLoaded(todos)) {
    return <div>読み込み中...</div>
  }
  if (isEmpty(todos)) {
    return <div>タスクリストが空です。</div>
  }
  return (
    <ul>
      {Object.keys(todos).map(
        (key) => (
          <Todo
            key={key} {...todos[key]}
            onClick={() => onTodoClick(uid, key)} />
        )
      )}
    </ul>
  )
}

TodoList.propTypes = {
  uid: PropTypes.string.isRequired,
  todos: PropTypes.object,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;

import React from 'react'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => {
  if (!isLoaded(todos)) {
    return <div>タスク一覧を読み込み中…</div>
  }
  if (isEmpty(todos)) {
    return <div>タスクがありません。</div>
  }
  return (
    <ul>
      {Object.keys(todos).map(
        (key) => (
          <Todo
            key={key} {...todos[key]}
            onClick={() => onTodoClick(key)} />
        )
      )}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.objectOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;

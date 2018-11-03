import React from 'react'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({displayName, todos, isOwnTodos, onTodoClick}) => {
  if (isLoaded(displayName) && isEmpty(displayName)) {
    return <div>存在しないユーザです。</div>
  }
  if (!isLoaded(todos)) {
    return <div>タスク一覧を読み込み中…</div>
  }
  if (isEmpty(todos)) {
    return <div>タスクがありません。</div>
  }

  const name = isOwnTodos ? 'あなた' : `${displayName} さん`;
  return (
    <div>
      {displayName && <div>{name}のタスク一覧</div>}
      <ul>
        {Object.keys(todos).map(
          (key) => (
            <Todo
              key={key}
              {...todos[key]}
              onClick={isOwnTodos ? (() => onTodoClick(key)) : (() => {})} />
          )
        )}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  displayName: PropTypes.string,
  todos: PropTypes.objectOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  isOwnTodos: PropTypes.bool.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;

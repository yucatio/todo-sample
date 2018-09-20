import React from 'react'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({uid, todos, authenticating, authenticated, onTodoClick}) => {
  if (authenticating) {
    return <div>ログイン中...</div>
  }
  if (!authenticated) {
    return <div>タスクリストを表示するには、ログインしてください。</div>
  }
  if (!isLoaded(todos)) {
    return <div>読み込み中...</div>
  }
  if (isEmpty(todos)) {
    return <div>タスクリストが空です。</div>
  }

  return (<ul>
    {Object.keys(todos).map(
        (key) => (
          <Todo key={key} {...todos[key]} onClick={() => onTodoClick(uid, key)}/>
        )
      )}
  </ul>)
}

TodoList.propTypes = {
  uid: PropTypes.string,
  todos: PropTypes.object,
  authenticating: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;

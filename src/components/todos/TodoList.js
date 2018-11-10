import React from 'react'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Todo from './Todo'

const TodoList = ({displayName, todos, isOwnTodos, onTodoClick}) => {
  if (isLoaded(displayName) && isEmpty(displayName)) {
    return <Typography>存在しないユーザです。</Typography>
  }
  if (!isLoaded(todos)) {
    return <Typography>タスク一覧を読み込み中…</Typography>
  }
  if (isEmpty(todos)) {
    return <Typography>タスクがありません。</Typography>
  }

  return (
    <List>
      {Object.keys(todos).map(
        (key) => (
          <Todo
            key={key}
            isOwnTodos={isOwnTodos}
            {...todos[key]}
            onClick={isOwnTodos ? (() => onTodoClick(key)) : (() => {})} />
        )
      )}
    </List>
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

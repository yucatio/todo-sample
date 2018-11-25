import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Tooltip from '@material-ui/core/Tooltip'
import green from '@material-ui/core/colors/green'
import { Done, CheckBoxOutlineBlank, CallMade, Error } from '@material-ui/icons'

const CheckIcon = (isOwnTodos, completed) => {
  if (completed) {
    return (
      <ListItemIcon>
        <Done nativeColor={green[500]} />
      </ListItemIcon>
    )
  }
  if (isOwnTodos) {
    return (
      <ListItemIcon>
        <CheckBoxOutlineBlank />
      </ListItemIcon>
    )
  }

  return null
}

const StatusIcon = (todoStatus) => {
  if (!todoStatus) {
    return null;
  }

  if (todoStatus.status === 'sending') {
    return (
        <Tooltip title="送信中">
          <CallMade />
      </Tooltip>
    )
  }
  if (todoStatus.status === 'error') {
    return (
        <Tooltip title="エラー">
          <Error />
      </Tooltip>
    )
  }

}

const Todo = ({isOwnTodos, onClick, todoId, completed, text, todoStatus}) => (
  <ListItem
    button={isOwnTodos}
    onClick={onClick}
    >
    {CheckIcon(isOwnTodos, completed)}
    <ListItemText
      inset>
      <span style={ {textDecoration: completed ? 'line-through' : 'none'}}>{text}</span>
    </ListItemText>
    {StatusIcon(todoStatus)}
  </ListItem>
)

Todo.propTypes = {
  isOwnTodos: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  todoId: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  todoStatus: PropTypes.shape({
    status: PropTypes.oneOf(['sending', 'success', 'error']).isRequired
  })
}

export default Todo;

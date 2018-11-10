import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import { Done, CheckBoxOutlineBlank } from '@material-ui/icons'

const CheckIcon = (isOwnTodos, completed) => {
  return (
    completed ?
      <ListItemIcon>
        <Done />
      </ListItemIcon>
      :
      isOwnTodos ?
        <ListItemIcon>
          <CheckBoxOutlineBlank />
        </ListItemIcon>
        :
        null
  )
}

const Todo = ({isOwnTodos, onClick, completed, text}) => (
  <ListItem
    button={isOwnTodos}
    onClick={onClick}
    >
    {CheckIcon(isOwnTodos, completed)}
    <ListItemText inset style={ {textDecoration: completed ? 'line-through' : 'none'}}>
      {text}
    </ListItemText>
  </ListItem>
)

Todo.propTypes = {
  isOwnTodos: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;

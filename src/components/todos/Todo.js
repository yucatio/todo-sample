import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Done from '@material-ui/icons/Done';

const CheckIcon = (isOwnTodos, completed) => {
  if (isOwnTodos) {
    return (<Checkbox
      checked={completed}
    />)
  } else {
    return (completed &&
      <ListItemIcon>
        <Done />
      </ListItemIcon>)
  }
}

const Todo = ({isOwnTodos, onClick, completed, text}) => (
  <ListItem
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

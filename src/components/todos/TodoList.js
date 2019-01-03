import React from 'react'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Todo from './Todo'

const styles = theme => ({
  message: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
});

const TodoList = ({todos, isOwnTodos, todoStatuses, onTodoClick, classes}) => {
  if (!isLoaded(todos)) {
    return <CircularProgress className={classes.message} />
  }
  if (isEmpty(todos)) {
    return <Typography className={classes.message} variant="body1">タスクがありません。</Typography>
  }

  return (
    <List>
      {Object.keys(todos).map(
        (key) => (
          <Todo
            key={key}
            todoId={key}
            isOwnTodos={isOwnTodos}
            {...todos[key]}
            todoStatus={todoStatuses[key]}
            onClick={isOwnTodos ? (() => onTodoClick(key)) : (() => {})} />
        )
      )}
    </List>
  )
}

TodoList.propTypes = {
  todos: PropTypes.objectOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  isOwnTodos: PropTypes.bool.isRequired,
  todoStatuses: PropTypes.objectOf(
    PropTypes.shape({
      status: PropTypes.oneOf(['sending', 'success', 'error']).isRequired,
    })
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TodoList)

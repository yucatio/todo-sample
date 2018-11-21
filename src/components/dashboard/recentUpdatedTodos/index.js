import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isEmpty, isLoaded } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import UserUpdatedTodos from './UserUpdatedTodo'

const styles = theme => ({
  recentUpdate: {
    maxWidth: 800,
    marginLeft  : 'auto',
    marginRight : 'auto'
  },
  title: {
    paddingTop: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  message: {
    padding: theme.spacing.unit * 3,
  }
})

const RecentUpdatedList = (todos, classes) => {
  if (!isLoaded(todos)) {
    return <Typography className={classes.message}>読み込み中…</Typography>
  }
  if (isEmpty(todos)) {
    return <Typography className={classes.message}>データがありません。</Typography>
  }
  return (
    <List>
      {todos.map(({key, value:todo}) =>
        <UserUpdatedTodos key={key} {...todo}/>
      )}
    </List>
  )
}

const RecentUpdatedTodos = ({todos, classes}) => (
  <Paper className={classes.recentUpdate}>
    <Typography variant="h5" className={classes.title}>最近の更新</Typography>
    {RecentUpdatedList(todos, classes)}
  </Paper>
)

RecentUpdatedTodos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.shape({
        text: PropTypes.string.isRequired,
        eventType: PropTypes.string.isRequired,
        uid: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string,
        _updatedAt: PropTypes.number.isRequired
      }).isRequired
    })
  )
}

const firebaseQueries = ({uid}) => (
  [
    {path: `recentUpdatedTodos`, type: 'once', queryParams: [ 'orderByChild=_updatedAt', 'limitToLast=10' ]}
  ]
)

const mapStateToProps = ({firebase: {ordered : {recentUpdatedTodos}}}) => {
  return {
    todos: recentUpdatedTodos && recentUpdatedTodos.reverse()
  }
}

export default compose(
  withStyles(styles),
  firebaseConnect(firebaseQueries),
  connect(
   mapStateToProps
))(RecentUpdatedTodos)

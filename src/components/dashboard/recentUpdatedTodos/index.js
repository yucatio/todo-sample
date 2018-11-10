import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isEmpty, isLoaded } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import UserUpdatedTodos from './UserUpdatedTodo'

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
});

const RecentUpdatedList = (todos) => {
  if (!isLoaded(todos)) {
    return <Typography>読み込み中…</Typography>
  }
  if (isEmpty(todos)) {
    return <Typography>データがありません。</Typography>
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
  <div>
    <div className={classes.toolbar} />
    <Typography variant="h5">最近の更新</Typography>
    {RecentUpdatedList(todos)}
  </div>
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
  ),
  classes: PropTypes.object.isRequired
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
  firebaseConnect(firebaseQueries),
  withStyles(styles),
  connect(
   mapStateToProps
))(RecentUpdatedTodos)

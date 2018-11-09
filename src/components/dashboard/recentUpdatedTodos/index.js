import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isEmpty, isLoaded } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import UserUpdatedTodos from './UserUpdatedTodo'

let RecentUpdatedTodos = ({todos}) => {
  const header = (<Typography variant="h5">最近の更新</Typography>)
  if (!isLoaded(todos)) {
    return (
      <div>
        {header}
        <Typography>読み込み中…</Typography>
      </div>
    )
  }
  if (isEmpty(todos)) {
    return (
      <div>
        {header}
        <Typography>データがありません。</Typography>
      </div>
    )
  }

  return (
    <div>
      {header}
      <List>
        {todos.map(({key, value:todo}) =>
          <UserUpdatedTodos key={key} {...todo}/>
        )}
      </List>
    </div>
  )
}

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

RecentUpdatedTodos = compose(
  firebaseConnect(firebaseQueries),
  connect(
   mapStateToProps
))(RecentUpdatedTodos)

export default RecentUpdatedTodos;

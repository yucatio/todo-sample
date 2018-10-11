import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isEmpty, isLoaded } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import UserUpdatedTodos from './UserUpdatedTodo'

let RecentUpdatedTodos = ({todos}) => {
  const header = (<h1>最近更新されたタスク</h1>)
  if (!isLoaded(todos)) {
    return (
      <div>
        <div>{header}</div>
        <div>読み込み中…</div>
      </div>
    )
  }
  if (isEmpty(todos)) {
    return (
      <div>
        <div>{header}</div>
        <div>データがありません。</div>
      </div>
    )
  }

  return (
    <div>
      {header}
      <ul>
        {todos.reverse().map(({key, value:todo}) =>
          <UserUpdatedTodos  key={key} {...todo}/>
        )}
      </ul>
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
    todos: recentUpdatedTodos
  }
}

RecentUpdatedTodos = compose(
  firebaseConnect(firebaseQueries),
  connect(
   mapStateToProps
))(RecentUpdatedTodos)

export default RecentUpdatedTodos;

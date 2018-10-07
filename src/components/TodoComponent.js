import React from 'react'
import { connect } from 'react-redux'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import AddTodo from '../containers/AddTodo'
import NoticeForTodo from './NoticeForTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

let TodoComponent = ({uid, authenticating, authenticated}) => {
  if (authenticating) {
    return <div>ログイン中...</div>
  }
  if (!authenticated) {
    return <div>タスク一覧を表示するには、ログインしてください。</div>
  }
  return (
    <div>
      <AddTodo />
      <NoticeForTodo />
      <VisibleTodoList uid={uid} />
      <Footer />
    </div>
  )
}

TodoComponent.propTypes = {
  uid: PropTypes.string,
  authenticating: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({firebase: {auth, auth: {uid}}}) => ({
  uid,
  authenticating: !isLoaded(auth),
  authenticated: !isEmpty(auth)
})

TodoComponent = connect(
  mapStateToProps
)(TodoComponent)

export default TodoComponent;

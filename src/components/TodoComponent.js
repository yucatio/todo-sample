import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddTodo from '../containers/AddTodo'
import NoticeForTodo from './NoticeForTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

let TodoComponent = ({uid, isOwnTodos}) => (
  <div>
    {isOwnTodos && <AddTodo />}
    <NoticeForTodo />
    <VisibleTodoList uid={uid} />
    <Footer />
  </div>
)


TodoComponent.propTypes = {
  uid: PropTypes.string,
  isOwnTodos: PropTypes.bool.isRequired,
}

const mapStateToProps = ({firebase: {auth: {uid}}}, {match}) => ({
  uid: match.params.uid,
  isOwnTodos: uid === match.params.uid,
})

TodoComponent = connect(
  mapStateToProps
)(TodoComponent)

export default TodoComponent;

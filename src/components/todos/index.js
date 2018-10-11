import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddTodo from '../../containers/todos/AddTodo'
import VisibleTodoList from '../../containers/todos/VisibleTodoList'
import NoticeForTodo from './Notice'
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

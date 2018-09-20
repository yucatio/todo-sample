import React from 'react'
import { connect } from 'react-redux'
import Footer from './Footer'
import Login from './Login'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import NoticeForTodo from './NoticeForTodo'

let App = ({uid}) => (
  <div>
    <Login />
    <AddTodo />
    <NoticeForTodo />
    <VisibleTodoList uid={uid} />
    <Footer />
  </div>
)

const mapStateToProps = state => ({
  uid: state.firebase.auth.uid
});

App = connect(
  mapStateToProps
)(App)

export default App;

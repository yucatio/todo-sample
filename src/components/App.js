import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import NoticeForTodoContainer from '../containers/NoticeForTodoContainer'

const App = () => (
  <div>
    <AddTodo />
    <NoticeForTodoContainer />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;

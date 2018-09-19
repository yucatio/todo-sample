import { connect } from 'react-redux'
import NoticeForTodo from '../components/NoticeForTodo'

const mapStateToProps = state => {
  return {
    notice: state.todos.notice
  }
}

const NoticeForTodoContainer = connect(
  mapStateToProps
)(NoticeForTodo)

export default NoticeForTodoContainer;

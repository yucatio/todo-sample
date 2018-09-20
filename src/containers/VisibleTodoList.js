import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { toggleTodo } from '../actions/todoActions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return Object.keys(todos).reduce(
          (filtered, key) => {
            if (todos[key].completed) {
              filtered[key] = todos[key];
            }
            return filtered;
          },
          {}
        )
    case 'SHOW_ACTIVE':
      return Object.keys(todos).reduce(
          (filtered, key) => {
            if (!todos[key].completed) {
              filtered[key] = todos[key];
            }
            return filtered;
          },
          {}
        )
    default :
        return todos;
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.firebase.data.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = compose(
  firebaseConnect([
      'todos'
    ]),
  connect(
  mapStateToProps,
  mapDispatchToProps
))(TodoList)

export default VisibleTodoList;

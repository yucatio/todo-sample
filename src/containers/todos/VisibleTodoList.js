import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { toggleTodo } from '../../actions/todoActions'
import TodoList from '../../components/todos/TodoList'

const getVisibleTodos = (todos, filter) => {
  if(!todos) return todos;
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return Object.keys(todos)
        .filter(key => todos[key].completed)
        .reduce((filtered, key) => {
          filtered[key] = todos[key];
          return filtered;
        },
        {}
      )
    case 'SHOW_ACTIVE':
      return Object.keys(todos)
        .filter(key => !todos[key].completed)
        .reduce((filtered, key) => {
          filtered[key] = todos[key];
          return filtered;
        },
        {}
      )
    default :
      return todos;
  }
}

const firebaseQueries = ({uid}) => (
  [ `todos/${uid}` ]
)

const mapStateToProps = ({todoStatuses, visibilityFilter, firebase: {auth, data : {todos, users}}}, {uid}) => {
  return {
    todos: getVisibleTodos(todos && todos[uid], visibilityFilter),
    todoStatuses
  }
}

const mapDispatchToProps = (dispatch, {uid}) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(uid, id))
  }
})

export default compose(
  firebaseConnect(firebaseQueries),
  connect(
   mapStateToProps,
   mapDispatchToProps
))(TodoList)

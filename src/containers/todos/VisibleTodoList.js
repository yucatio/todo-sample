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
  [
    {path: `users/${uid}/displayName`, type: 'once'},
    `todos/${uid}`
  ]
)

const mapStateToProps = ({visibilityFilter, firebase: {auth, data : {todos, users}}}, {uid}) => {
  return {
    displayName: users && users[uid] && users[uid].displayName,
    todos: getVisibleTodos(todos && todos[uid], visibilityFilter),
    isOwnTodos: auth.uid === uid
  }
}

const mapDispatchToProps = (dispatch, {uid}) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(uid, id))
    }
  }
}

const VisibleTodoList = compose(
  firebaseConnect(firebaseQueries),
  connect(
   mapStateToProps,
   mapDispatchToProps
))(TodoList)

export default VisibleTodoList;

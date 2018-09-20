import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isEmpty, isLoaded } from 'react-redux-firebase'
import { toggleTodo } from '../actions/todoActions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  if(!todos) return todos;
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

const mapStateToProps = ({visiblityFilter, firebase: {auth, data : {todos}}}, {uid}) => {
  return {
    uid,
    todos: getVisibleTodos( todos && uid ? todos[uid] : undefined, visiblityFilter),
    authenticating:  !isLoaded(auth),
    authenticated: !isEmpty(auth)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: (uid, id) => {
      dispatch(toggleTodo(uid, id))
    }
  }
}

const firebaseQuery = (props, store) => {
  if (props.uid) {
    return [
    `todos/${props.uid}`
  ]}

  return [];
  }

const VisibleTodoList = compose(
  firebaseConnect(firebaseQuery),
  connect(
  mapStateToProps,
  mapDispatchToProps
))(TodoList)

export default VisibleTodoList;

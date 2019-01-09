import { LOCATION_CHANGE_ON_TODOS, LOGOUT_SUCCESS,
  ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_ERROR,
  TOGGLE_TODO_REQUEST, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_ERROR,
   }
   from '../actions/'

const INITIAL_STATE = {}

const todoStatuses = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO_REQUEST:
      return { ...state, [action.todoId]:　{status : 'sending'}}
    case ADD_TODO_SUCCESS:
      return { ...state, [action.todoId]:　{status : 'success'}}
    case ADD_TODO_ERROR:
      return { ...state, [action.todoId]:　{status : 'error'}}
    case TOGGLE_TODO_REQUEST:
      return { ...state, [action.todoId]:　{status : 'sending'}}
    case TOGGLE_TODO_SUCCESS:
      return { ...state, [action.todoId]:　{status : 'success'}}
    case TOGGLE_TODO_ERROR :
      return { ...state, [action.todoId]:　{status : 'error'}}
    case LOCATION_CHANGE_ON_TODOS:
    case LOGOUT_SUCCESS :
      return INITIAL_STATE
    default:
      return state
  }
}

export default todoStatuses;

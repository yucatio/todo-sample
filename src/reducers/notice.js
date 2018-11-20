import { NOT_AUTHENTICATED_ON_TODO_ACTION, ADD_TODO_ERROR, TOGGLE_TODO_ERROR,
  LOCATION_CHANGE_ON_TODOS, CLOSE_NOTICE}
   from '../actions/'

const INITIAL_STATE = { text: '', level: 'info', open: false }

const notice = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOT_AUTHENTICATED_ON_TODO_ACTION :
      return { text: 'タスクを追加・変更するにはログインしてください',
          level: 'warning', open: true }
    case ADD_TODO_ERROR :
    case TOGGLE_TODO_ERROR :
      return { text: 'エラーが発生しました。時間をおいて再度お試しください。',
        level: 'error', open: true }
    case CLOSE_NOTICE :
      return { ...state, open: false }
    case LOCATION_CHANGE_ON_TODOS :
    return { ...state, open: false }
    default:
      return state
  }
}

export default notice;

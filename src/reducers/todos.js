import { LOCATION_CHANGE_ON_TODOS, LOGOUT_SUCCESS,
  ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_ERROR,
  TOGGLE_TODO_REQUEST, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_ERROR,
  NOT_AUTHENTICATED_ON_TODO_ACTION }
   from '../actions/'

const getStringForCompleted = (completed) => (
  completed ? '完了' : '未完了'
)
const todos = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO_REQUEST:
      return {...state, notice: 'データを送信中'}
    case ADD_TODO_SUCCESS:
      return {...state, notice: '送信完了しました'}
    case ADD_TODO_ERROR:
      return {...state, notice: 'エラーが発生しました'}
    case TOGGLE_TODO_REQUEST:
      return {...state, notice:
        '"' + action.text + '"のステータスを"'
        + getStringForCompleted(action.completed)
        + '"に変更中'}
    case TOGGLE_TODO_SUCCESS:
      return {...state, notice:
        '"' + action.text + '"のステータスを"'
        + getStringForCompleted(action.completed)
        + '"に変更しました'}
    case TOGGLE_TODO_ERROR :
      return {...state, notice:
        '"' + action.text + '"の更新中にエラーが発生しました。'}
    case NOT_AUTHENTICATED_ON_TODO_ACTION :
      return {...state, notice: 'タスクを追加・変更するにはログインしてください'}
    case LOCATION_CHANGE_ON_TODOS:
    case LOGOUT_SUCCESS :
      return {}
    default:
      return state
  }
}

export default todos;

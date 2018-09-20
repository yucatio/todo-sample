const getStringForCompleted = (completed) => (
  completed ? '完了' : '未完了'
)
const todos = (state = {}, action) => {
  switch (action.type) {
    case 'ADDING_TODO':
      return {...state, notice: 'データを送信中'}
    case 'CREATE_TODO_SUCCESS':
      return {...state, notice: '送信完了しました'}
    case 'CREATE_TODO_ERROR' :
      return {...state, notice: 'エラーが発生しました'}
    case 'TOGGLING_TODO':
      return {...state, notice:
        '"' + action.text + '"のステータスを"'
        + getStringForCompleted(action.completed)
        + '"に変更中'}
    case 'TOGGLE_TODO_SUCCESS':
      return {...state, notice:
        '"' + action.text + '"のステータスを"'
        + getStringForCompleted(action.completed)
        + '"に変更しました'}
    case 'TOGGLE_TODO_ERROR' :
      return {...state, notice:
        '"' + action.text + '"の更新中にエラーが発生しました。'}
    case 'NOT_AUTHENTICATED_ON_TODO_ACTION' :
      return {...state, notice: 'タスクを追加・変更するにはログインしてください'}
    default:
      return {...state, notice: ''}
  }
}

export default todos;

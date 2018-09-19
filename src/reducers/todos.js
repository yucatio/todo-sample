const todos = (state = {}, action) => {
  switch (action.type) {
    case 'ADDING_TODO':
      return {...state, notice: 'データを送信中'}
    case 'CREATE_TODO_SUCCESS':
      return {...state, notice: '送信完了しました'}
    case 'CREATE_TODO_ERROR' :
      return {...state, notice: 'エラーが発生しました'}
    default:
      return state
  }
}

export default todos;

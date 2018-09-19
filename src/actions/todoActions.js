export const addTodo = text => {
  return (dispatch, getState, {getFirebase}) => {
    dispatch({ type: 'ADDING_TODO' });
    const firebase = getFirebase();
    firebase.push('todos', {completed: false, text})
    .then(() => {
      dispatch({ type: 'CREATE_TODO_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_TODO_ERROR' }, err);
    });
  }
}

export const toggleTodo = id => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const state = getState();
    const todos = state.firebase.data.todos;
    dispatch({ type: 'TOGGLING_TODO', text: todos[id].text, completed: !todos[id].completed });
    firebase.update('todos/'+ id, {completed: ! todos[id].completed})
    .then(() => {
      dispatch({ type: 'TOGGLE_TODO_SUCCESS', text: todos[id].text, completed: !todos[id].completed });
    }).catch(err => {
      dispatch({ type: 'TOGGLE_TODO_ERROR', text: todos[id].text, completed: !todos[id].completed }, err);
    });
  }
}

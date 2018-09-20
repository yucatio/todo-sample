export const addTodo = (uid, text) => {
  return (dispatch, getState, {getFirebase}) => {
    if (!uid) {
      dispatch({ type: 'NOT_AUTHENTICATED_ON_TODO_ACTION' });
      return;
    }
    dispatch({ type: 'ADDING_TODO' });
    const firebase = getFirebase();
    firebase.push(`todos/${uid}`, {completed: false, text})
    .then(() => {
      dispatch({ type: 'CREATE_TODO_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_TODO_ERROR' }, err);
    });
  }
}

export const toggleTodo = (uid, id) => {
  return (dispatch, getState, {getFirebase}) => {
    if (!uid) {
      dispatch({ type: 'NOT_AUTHENTICATED_ON_TODO_ACTION' });
      return;
    }
    const firebase = getFirebase();
    const state = getState();
    const todos = state.firebase.data.todos[uid];
    dispatch({ type: 'TOGGLING_TODO', text: todos[id].text, completed: !todos[id].completed });
    firebase.update(`todos/${uid}/${id}`, {completed: ! todos[id].completed})
    .then(() => {
      dispatch({ type: 'TOGGLE_TODO_SUCCESS', text: todos[id].text, completed: !todos[id].completed });
    }).catch(err => {
      dispatch({ type: 'TOGGLE_TODO_ERROR', text: todos[id].text, completed: !todos[id].completed }, err);
    });
  }
}

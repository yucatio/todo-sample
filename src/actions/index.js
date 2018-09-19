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

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const setVisiblityFilter = filter => ({
  type: 'SET_VISIBLITY_FILTER',
  filter
})

export const VisiblityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

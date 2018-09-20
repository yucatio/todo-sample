export const loginWithGoogle = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.login({provider: 'google'})
    .then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'LOGIN_ERROR' }, err);
    });
  }
}

export const logout = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.logout()
    .then(() => {
      dispatch({ type: 'LOGOUT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'LOGOUT_ERROR' }, err);
    });
  }
}

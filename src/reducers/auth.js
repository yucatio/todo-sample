const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS' :
    case 'LOGIN_ERROR' :
    case 'LOGOUT_SUCCESS' :
    case 'LOGOUT_ERROR' :
      return state;
    default :
      return state;
  }
}

export default auth;

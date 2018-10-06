const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS' :
    case 'LOGOUT_SUCCESS' :
    case 'LOGIN_ERROR' :
    case 'LOGOUT_ERROR' :
    default :
      return state;
  }
}

export default auth;

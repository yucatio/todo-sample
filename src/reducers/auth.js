const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS' :
    case 'LOGOUT_SUCCESS' :
      return state;
    case 'LOGIN_ERROR' :
    case 'LOGOUT_ERROR' :
      console.log('Error happened on ' + action.type, action.err)
      return state;
    default :
      return state;
  }
}

export default auth;

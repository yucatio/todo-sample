import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { loginWithGoogle, logout } from '../actions/authActions'

const Login = ({ firebase, auth, loginWithGoogle, logout }) => {
  if (!isLoaded(auth)) {
    return (<div>ログイン中...</div>);
  }
  if (isEmpty(auth)) {
    return (
      <button onClick={loginWithGoogle}>Googleアカウントでログイン</button>
    )
  }
  return (<button onClick={logout}>Logout</button>);

}

const mapStateToProps = state => (
  { auth: state.firebase.auth }
)

const mapDispatchToProps = dispatch => {
  return {
    loginWithGoogle: () => dispatch(loginWithGoogle()),
    logout: () => {dispatch(logout())
    }
  }
}

const LoginComntainer = compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(Login)

export default LoginComntainer;

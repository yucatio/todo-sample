import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { loginWithGoogle, logout } from '../../actions/authActions'

const Login = ({ auth, loginWithGoogle, logout }) => {
  if (!isLoaded(auth)) {
    return (<Typography>ログイン中...</Typography>);
  }
  if (isEmpty(auth)) {
    return (
      <Button variant="contained" color="primary" onClick={loginWithGoogle}>Googleアカウントでログイン</Button>
    )
  }
  return (
    <React.Fragment>
      <Typography color="inherit">{auth.displayName} さん</Typography>
      <Button variant="contained" color="primary" onClick={logout}>ログアウト</Button>
    </React.Fragment>
  );
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  loginWithGoogle: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => (
  { auth: state.firebase.auth }
)

const mapDispatchToProps = dispatch => {
  return {
    loginWithGoogle: () => dispatch(loginWithGoogle()),
    logout: () => dispatch(logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

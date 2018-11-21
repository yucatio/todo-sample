import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { loginWithGoogle, logout } from '../../actions/authActions'

const styles = {
  avatar: {
    margin: 10,
  },
}

const Login = ({ auth, profile, loginWithGoogle, logout, classes }) => {
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
      {profile.avatarUrl && <Avatar alt={profile.displayName} src={profile.avatarUrl} className={classes.avatar} />}
      <Typography color="inherit">{profile.displayName} さん</Typography>
      <Button color="inherit" onClick={logout}>ログアウト</Button>
    </React.Fragment>
  );
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.shape({
    displayName: PropTypes.string,
    avatarUrl: PropTypes.string
  }).isRequired,
  loginWithGoogle: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})

const mapDispatchToProps = dispatch => {
  return {
    loginWithGoogle: () => dispatch(loginWithGoogle()),
    logout: () => dispatch(logout())
  }
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
))(Login)

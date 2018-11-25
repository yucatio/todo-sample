import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { loginWithGoogle, logout } from '../../actions/authActions'

const styles = {
  avatar: {
    margin: 10,
  },
  userName: {
    textTransform: 'none',
  }
}

class Login extends React.Component {
  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { auth, profile, loginWithGoogle, logout, classes } = this.props
    const { anchorEl } = this.state

    if (!isLoaded(auth)) {
      return (<Typography color="inherit">ログイン中...</Typography>)
    }
    if (isEmpty(auth)) {
      return (
        <Button variant="contained" color="primary" onClick={loginWithGoogle}>Googleアカウントでログイン</Button>
      )
    }
    return (
      <React.Fragment>
        <Button color="inherit" aria-owns={anchorEl ? 'user-menu' : undefined} aria-haspopup="true"
          onClick={this.handleClick} className={classes.userName}>
          {profile.displayName} さん
        </Button>
        {profile.avatarUrl && <Avatar alt={profile.displayName} src={profile.avatarUrl} className={classes.avatar} />}
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
        >
          <MenuItem onClick={logout}>ログアウト</MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
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

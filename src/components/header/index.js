import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import logo from '../../img/logo/Primary_logo_on_transparent_404x63.png'
import MenuIcons from './MenuIcons'
import Login from './Login'

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
})

const Header = ({ classes }) => (
  <AppBar className={classes.appBar}>
    <Toolbar>
      <Link to='/'>
        <img src={logo} alt="TODODO(トドド)" height="36" width="auto"/>
      </Link>
      <div className={classes.grow}></div>
      <MenuIcons />
      <Login />
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header);

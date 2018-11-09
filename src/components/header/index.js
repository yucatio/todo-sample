import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../img/logo/Primary_logo_on_transparent_404x63.png'
import MenuIcons from './MenuIcons'
import Login from './Login'

const Header = () => (
  <AppBar position="relative">
    <Toolbar>
      <Link to='/'>
        <img src={logo} alt="TODODO(トドド)" height="36" width="auto"/>
      </Link>
      <MenuIcons />
      <Login />
    </Toolbar>
  </AppBar>
)

export default Header;

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

let Navbar = ({uid}) => (
  <div>
    <Link to='/'>Home</Link>&nbsp;
    { uid && <Link to={`/users/${uid}/todos`}>タスクを編集する</Link> }
  </div>
)

Navbar.propTypes = {
  uid: PropTypes.string
}

const mapStateToProps = state => (
  { uid: state.firebase.auth.uid }
)

Navbar = connect(
  mapStateToProps
)(Navbar)

export default Navbar;

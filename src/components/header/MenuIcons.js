import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

let MenuIcons = ({uid}) => {
  if (uid) {
    return (
      <IconButton component={Link} to={`/users/${uid}/todos`} aria-label="編集">
        <EditIcon />
      </IconButton>
    )
  } else {
    return null;
  }
}

MenuIcons.propTypes = {
  uid: PropTypes.string
}

const mapStateToProps = state => (
  { uid: state.firebase.auth.uid }
)

MenuIcons = connect(
  mapStateToProps
)(MenuIcons)

export default MenuIcons;

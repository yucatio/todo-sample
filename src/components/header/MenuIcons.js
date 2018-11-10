import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit'

const MenuIcons = ({uid}) => {
  if (uid) {
    return (
      <Tooltip title="編集">
        <IconButton color="inherit" component={Link} to={`/users/${uid}/todos`} aria-label="編集">
          <EditIcon />
        </IconButton>
      </Tooltip>
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

export default connect(
  mapStateToProps
)(MenuIcons)

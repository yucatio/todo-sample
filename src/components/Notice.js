import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import { closeNotice } from '../actions/todoActions'
import LevelSnackbarContentWrapper from './util/snackbar/LevelSnackbarContentWrapper'

const Notice = ({ notice, handleClose }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    open={notice.open}
    autoHideDuration={30000}
    onClose={handleClose}
  >
    <LevelSnackbarContentWrapper
        onClose={handleClose}
        variant={notice.level}
        message={notice.text}
      />

  </Snackbar>
)


Notice.propTypes = {
  notice: PropTypes.shape({
    text: PropTypes.string.isRequired,
    level: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
    open: PropTypes.bool.isRequired
  }),
  handleClose: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    notice: state.notice
  }
}

const mapDispatchToProps = (dispatch, {uid}) => ({
  handleClose: () => {
    dispatch(closeNotice())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notice)

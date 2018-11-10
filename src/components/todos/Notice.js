import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';

const Notice = ({ notice }) => {
  if (! notice) {
    return '';
  }
  return (
    <Typography>
      {notice}
    </Typography>
  )
}

Notice.propTypes = {
  notice: PropTypes.string
}

const mapStateToProps = state => {
  return {
    notice: state.todos.notice
  }
}

export default connect(
  mapStateToProps
)(Notice)

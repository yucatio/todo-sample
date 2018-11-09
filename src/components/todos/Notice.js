import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';

let NoticeForTodo = ({ notice }) => {
  if (! notice) {
    return '';
  }
  return (
    <Typography>
      {notice}
    </Typography>
  )
}

NoticeForTodo.propTypes = {
  notice: PropTypes.string
}

const mapStateToProps = state => {
  return {
    notice: state.todos.notice
  }
}

NoticeForTodo = connect(
  mapStateToProps
)(NoticeForTodo)

export default NoticeForTodo;

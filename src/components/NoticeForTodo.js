import React from 'react'
import PropTypes from 'prop-types'

const NoticeForTodo = ({ notice }) => {
  if (! notice) {
    return '';
  }
  return (<div>
    {notice}
  </div>)
}

NoticeForTodo.propTypes = {
  notice: PropTypes.string
}

export default NoticeForTodo;

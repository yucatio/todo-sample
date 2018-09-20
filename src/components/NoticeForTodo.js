import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

let NoticeForTodo = ({ notice }) => {
  if (! notice) {
    return '';
  }
  return (
    <div>
      {notice}
    </div>
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

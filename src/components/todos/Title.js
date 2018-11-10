import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const Title = ({displayName, isOwnTodos}) => {
  const name = isOwnTodos ? 'あなた' : `${displayName} さん`;
  return (
    <div>
      {displayName && <Typography variant="h5">{name}のタスク一覧</Typography>}
    </div>
  )
}

Title.propTypes = {
  displayName: PropTypes.string,
  isOwnTodos: PropTypes.bool.isRequired,
}

const mapStateToProps = ({firebase: {data : {users}}}, {uid}) => {
  return {
    displayName: users && users[uid] &&　users[uid].displayName
  }
}

export default connect(
   mapStateToProps,
)(Title)

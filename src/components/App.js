import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Login from './Login'
import TodoComponent from './TodoComponent'

let App = ({uid}) => (
  <div>
    <Login />
    <TodoComponent uid={uid} />
  </div>
)

App.propTypes = {
  uid: PropTypes.string
}

const mapStateToProps = state => ({
  uid: state.firebase.auth.uid
});

App = connect(
  mapStateToProps
)(App)

export default App;

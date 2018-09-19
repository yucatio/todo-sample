import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  firebase: firebaseReducer,
  todos,
  visibilityFilter
})

import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import todos from './todos'
import visiblityFilter from './visiblityFilter'

export default combineReducers({
  firebase: firebaseReducer,
  todos,
  visiblityFilter
})

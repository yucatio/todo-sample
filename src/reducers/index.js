import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import visiblityFilter from './visiblityFilter'

export default combineReducers({
  firebase: firebaseReducer,
  visiblityFilter
})

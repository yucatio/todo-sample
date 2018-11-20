import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import auth from './auth'
import notice from './notice'
import todoStatuses from './todoStatuses'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  firebase: firebaseReducer,
  auth,
  notice,
  todoStatuses,
  visibilityFilter
})

import { combineReducers } from 'redux'
import todos from './todos'
import visiblityFilter from './visiblityFilter'

export default combineReducers({
  todos,
  visiblityFilter
})

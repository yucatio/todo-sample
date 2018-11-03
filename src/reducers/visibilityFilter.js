import { LOCATION_CHANGE_ON_TODOS, LOGOUT_SUCCESS, SET_VISIBILITY_FILTER } from '../actions/'
import { VisibilityFilters } from '../actions/visibilityFilterActions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    case LOCATION_CHANGE_ON_TODOS:
    case LOGOUT_SUCCESS:
      return VisibilityFilters.SHOW_ALL
    default:
      return state
  }
}

export default visibilityFilter;

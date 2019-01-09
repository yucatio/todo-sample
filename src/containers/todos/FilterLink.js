import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/visibilityFilterActions'
import FilterButton from '../../components/todos/FilterButton'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButton)

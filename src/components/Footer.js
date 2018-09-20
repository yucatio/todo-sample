import React from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions/visibilityFilterActions'

let Footer = () => (
  <p>
    Show:
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
);

Footer.propTypes = {
  authenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  authenticated: !isEmpty(state.firebase.auth)
})

Footer = connect(mapStateToProps)(Footer)

export default Footer;

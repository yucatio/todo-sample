import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisiblityFilters } from '../actions'

const Footer = () => (
  <p>
    Show:
    <FilterLink filter={VisiblityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisiblityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisiblityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
)

export default Footer;

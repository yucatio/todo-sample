import React from 'react'
import Typography from '@material-ui/core/Typography';
import FilterLink from '../../containers/todos/FilterLink'
import { VisibilityFilters } from '../../actions/visibilityFilterActions'

const Footer = () => (
  <div>
    <Typography variant="subtitle1">表示:</Typography>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      全て
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      未完了
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      完了
    </FilterLink>
  </div>
)

export default Footer;

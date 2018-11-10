import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import FilterLink from '../../containers/todos/FilterLink'
import { VisibilityFilters } from '../../actions/visibilityFilterActions'

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
});

const FilterNav = ({ classes }) => (
  <Drawer variant="permanent" anchor="right" className={classes.drawer} classes={{ paper: classes.drawerPaper, }}>
    <div className={classes.toolbar} />
    <List subheader={<ListSubheader component="div">表示</ListSubheader>}>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        全て
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        未完了
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        完了
      </FilterLink>
    </List>
  </Drawer>
)

FilterNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FilterNav);

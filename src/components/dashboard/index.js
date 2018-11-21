import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import RecentUpdatedTodos from './recentUpdatedTodos/'

const styles = theme => ({
  dashboard: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5
  },
})

const Dashboard = ({classes}) => (
  <div className={classes.dashboard}>
    <RecentUpdatedTodos />
  </div>
)

export default withStyles(styles)(Dashboard)

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import RecentUpdatedTodos from './recentUpdatedTodos/'

const styles = theme => ({
  dashboradContent: {
    maxWidth: 800,
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
    marginLeft  : 'auto',
    marginRight : 'auto'
  },
})

const Dashboard = ({classes}) => (
  <div>
    <div className={classes.dashboradContent}>
      <RecentUpdatedTodos />
    </div>
  </div>
)

export default withStyles(styles)(Dashboard)

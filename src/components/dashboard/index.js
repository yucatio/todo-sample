import React from 'react'
import PropTypes from 'prop-types'
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

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard)

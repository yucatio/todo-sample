import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import RecentUpdatedTodos from './recentUpdatedTodos/'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 5,
  },
  content: {
    maxWidth: 800,
    marginLeft  : 'auto',
    marginRight : 'auto'
  },
})

const Dashboard = ({classes}) => (
  <div className={classes.root}>
    <div className={classes.content}>
      <RecentUpdatedTodos />
    </div>
  </div>
)

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard)

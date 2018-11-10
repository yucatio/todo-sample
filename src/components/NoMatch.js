import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
});

const NoMatch = ({ classes }) => (
  <div>
    <div className={classes.toolbar} />
    <Typography variant="h1">Page Not Found</Typography>
  </div>
)

NoMatch.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NoMatch);

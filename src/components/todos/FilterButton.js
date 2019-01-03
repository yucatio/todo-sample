import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Done from '@material-ui/icons/Done'

const FilterButton = ({ active, children, onClick }) => (
  <ListItem button
    onClick={onClick}
    disabled={active}
    >
    {active &&
      <ListItemIcon>
        <Done />
      </ListItemIcon>}
    <ListItemText inset primary={children} />
  </ListItem>
)

FilterButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default FilterButton

import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { addTodo } from '../../actions/todoActions'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  }
})


class AddTodo extends React.Component {
  render() {
    const {uid, dispatch, classes} = this.props

    return (
      <div className={classes.root}>
        <form
          onSubmit={ e => {
            e.preventDefault()
            if (!this.inputElement.value.trim()) {
              return
            }
            dispatch(addTodo(uid, this.inputElement.value))
            this.inputElement.value = ''
          }}
        >
          <TextField
            inputRef={node => {
              this.inputElement = node
            }}
          />
          {' '}
          <Button variant="contained" type="submit" color="secondary">
            タスクを追加
          </Button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  uid: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default compose(
  withStyles(styles),
  connect()
)(AddTodo)

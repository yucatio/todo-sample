import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import AddTodo from '../../containers/todos/AddTodo'
import { locationChangeOnTodos } from '../../actions/todoActions'
import VisibleTodoList from '../../containers/todos/VisibleTodoList'
import Title from './Title'
import FilterNav from './FilterNav'

const styles = theme => ({
  todoRoot: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    margin: theme.spacing.unit * 3,
  },
});

class TodoComponent extends React.Component {
  componentWillMount() {
    this.props.locationChange()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.location !== this.props.location) {
      this.props.locationChange()
    }
  }
  render() {
    const {isOwnTodos, match: { params: {uid}}, classes} = this.props;
    return (
      <div className={classes.todoRoot}>
        <Paper className={classes.content}>
          <Title isOwnTodos={isOwnTodos} uid={uid} />
          {isOwnTodos && <AddTodo uid={uid} />}
          <VisibleTodoList uid={uid} isOwnTodos={isOwnTodos} />
        </Paper>
        <FilterNav />
      </div>
   )
  }
}

TodoComponent.propTypes = {
  isOwnTodos: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      uid: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  locationChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

const mapStateToProps = ({firebase: {auth: {uid}}}, {match}) => ({
  isOwnTodos: uid === match.params.uid,
})

const mapDispatchToProps = (dispatch) => ({
  locationChange: () => dispatch(locationChangeOnTodos())
})

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
))(TodoComponent)

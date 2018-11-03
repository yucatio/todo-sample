import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddTodo from '../../containers/todos/AddTodo'
import { locationChangeOnTodos } from '../../actions/todoActions'
import VisibleTodoList from '../../containers/todos/VisibleTodoList'
import Notice from './Notice'
import Footer from './Footer'

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
    const {isOwnTodos, match: { params: {uid}}} = this.props;
    return (
      <div>
        {isOwnTodos && <AddTodo uid={uid} />}
        <Notice />
        <VisibleTodoList uid={uid} isOwnTodos={isOwnTodos} />
        <Footer />
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
  locationChange: PropTypes.func.isRequired
}

const mapStateToProps = ({firebase: {auth: {uid}}}, {match}) => ({
  isOwnTodos: uid === match.params.uid,
})

const mapDispatchToProps = (dispatch) => ({
  locationChange: () => dispatch(locationChangeOnTodos())
})

TodoComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoComponent)

export default TodoComponent;

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddTodo from '../../containers/todos/AddTodo'
import VisibleTodoList from '../../containers/todos/VisibleTodoList'
import { locationChange } from '../../actions/routeAction'
import NoticeForTodo from './Notice'
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
    const {uid, isOwnTodos} = this.props;
    return (
      <div>
        {isOwnTodos && <AddTodo />}
        <NoticeForTodo />
        <VisibleTodoList uid={uid} />
        <Footer />
      </div>
   )
  }
}


TodoComponent.propTypes = {
  uid: PropTypes.string,
  isOwnTodos: PropTypes.bool.isRequired,
}

const mapStateToProps = ({firebase: {auth: {uid}}}, {match}) => ({
  uid: match.params.uid,
  isOwnTodos: uid === match.params.uid,
})

const mapDispatchToProps = (dispatch) => ({
  locationChange: () => dispatch(locationChange())
})

TodoComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoComponent)

export default TodoComponent;

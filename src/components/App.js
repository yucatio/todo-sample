import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Navbar from './navbar'
import Dashboard from './dashboard/'
import Login from './login/'
import TodoComponent from './todos/'
import NoMatch from './NoMatch'

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <Login />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/users/:uid/todos" component={TodoComponent} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </ConnectedRouter>
)

export default App;

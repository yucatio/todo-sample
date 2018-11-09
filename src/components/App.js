import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from  './header/'
import Dashboard from './dashboard/'
import TodoComponent from './todos/'
import NoMatch from './NoMatch'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/users/:uid/todos" component={TodoComponent} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;

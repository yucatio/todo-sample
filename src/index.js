import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase'
import todoApp from './reducers'
import App from './components/App';
import firebaseConfig from './firebase/config'
import registerServiceWorker from './registerServiceWorker'
import {MuiThemeProvider} from '@material-ui/core/styles'
import {theme} from './materialui/theme'

firebase.initializeApp(firebaseConfig)

const createStoreWithFirebase = compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase})),
  reactReduxFirebase(firebase, {userProfile: 'users', preserveOnLogout: ['todos', 'users', 'recentUpdatedTodos']})
)(createStore)

const store = createStoreWithFirebase(todoApp)

render (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)

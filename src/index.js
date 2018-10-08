import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase'
import todoApp from './reducers'
import App from './components/App';
import firebaseConfig from './firebase/config'
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp(firebaseConfig);
const history = createBrowserHistory()

const createStoreWithFirebase = compose(
  applyMiddleware(
    thunk.withExtraArgument({getFirebase}),
    routerMiddleware(history)),
  reactReduxFirebase(firebase, {userProfile: 'users', preserveOnLogout: ['todos', 'users']})
)(createStore);

const store = createStoreWithFirebase(connectRouter(history)(todoApp));

render (
  <Provider store={store}>
    <App  history={history} />
  </Provider>,
  document.getElementById('root')
)

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase'
import './index.css';
import todoApp from './reducers'
import App from './components/App';
import firebaseConfig from './firebase/config'
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp(firebaseConfig);

const createStoreWithFirebase = compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase})),
  reactReduxFirebase(firebase, {})
)(createStore);

const store = createStoreWithFirebase(todoApp);

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

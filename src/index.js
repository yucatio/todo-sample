import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase'
import './index.css';
import todoApp from './reducers'
import App from './components/App';
import firebaseConfig from './firebase/config'
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp(firebaseConfig);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, {})
)(createStore);

const store = createStoreWithFirebase(todoApp);

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

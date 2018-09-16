import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import todoApp from './reducers'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoApp)

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

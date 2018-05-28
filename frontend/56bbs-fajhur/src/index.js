import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import rootReducer from './reducers/';
import './style.css';
import { createLogger } from 'redux-logger'

const logger = createLogger({
  // ...options
});

const store = createStore(rootReducer, applyMiddleware(logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

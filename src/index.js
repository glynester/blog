import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// applyMiddleware - how we connect middleware to our redux store
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
// how we hookup middleware to a redux store.
const store  = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.querySelector('#root')
)



















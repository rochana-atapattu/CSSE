import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from "redux-promise";
import thunkMiddleware from 'redux-thunk'

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise,thunkMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
    <App />
  </Provider>
  , document.querySelector('.container'));

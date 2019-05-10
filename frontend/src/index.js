import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../src/styles/bootstrap.min.css';
import '../src/styles/style.css';
import '../src/styles/react-tag.css';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { fetchAllRestaurants } from './actions/index';
import { fetchAllDishes } from './actions/index';


import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(
  applyMiddleware(thunk)
));

store.dispatch(fetchAllRestaurants());
store.dispatch(fetchAllDishes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
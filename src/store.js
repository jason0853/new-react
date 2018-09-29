import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [];

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

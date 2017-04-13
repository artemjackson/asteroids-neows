import { applyMiddleware, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { ActionStates } from 'lib'; 
import reducer from './reducer';

const middlewares = [
  thunk,
  promiseMiddleware({
    promiseTypeSuffixes: Object.values(ActionStates)
  })
];

let composeEnhancers = compose;

export default (initialState = {}) => {
  if (process.env.NODE_ENV === 'development') {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }


  return createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );
}

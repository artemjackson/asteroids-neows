import React from 'react';
import { render } from 'react-dom';
import createStore from './store';
import routes from './routes';
import App from './modules/app';

const initialState = window.__INITIAL_STATE__;
const store = createStore(initialState);

const APP_ROOT = document.getElementById('app-root');

render(
  <App store={store} routes={routes} />,
  APP_ROOT
  );
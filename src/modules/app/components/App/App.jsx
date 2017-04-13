import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

export default function App({ store, routes }) {
  return (
    <Provider store={store}>
      <Router history={hashHistory} routes={routes}>
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired
};

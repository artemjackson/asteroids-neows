import PropTypes from 'prop-types';
import React from 'react';

export default function Layout(props) {
  return (
    <div>
      Layout:
      {props.routes}
    </div>
  );
}

Layout.propTypes = {
  component: PropTypes.element
};

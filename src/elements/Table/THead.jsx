import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export default function THead({ field, children, sort = false }) {
  return <i>{children}</i>;
}

THead.propTypes = {
  field: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  sort: PropTypes.bool
};

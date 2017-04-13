import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { SortOrders } from './sort';

import styles from './styles';

export default function THeadContainer({ field, children, sortOrder, onClick }) {
  return (
    <span
      className={cx(styles.toggle, {
        [styles.asc]: sortOrder === SortOrders.ASC,
        [styles.desc]: sortOrder === SortOrders.DESC
      })}
      onClick={() => onClick(field)}
    >
      {children}
    </span>
  );
}

THeadContainer.propTypes = {
  field: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  sortOrder: PropTypes.oneOf(Object.values(SortOrders)),
  onClick: PropTypes.func
};

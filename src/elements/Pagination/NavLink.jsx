import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

import styles from './styles';

export default function NavLink({ className, ...passThrough }) {
  return (
    <Link className={cx(styles.link, className)} activeClassName={styles.active} {...passThrough} />
  );
}

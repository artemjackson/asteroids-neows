import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';

import styles from './styles';

const createLocationForPageCreator = (size) => ({ pathname }, page) => ({ pathname, query: { page, size }});

export default function Pagination({ location, currentPage, totalPages, itemsPerPage }) {
  const createLocationForPage = createLocationForPageCreator(itemsPerPage);

  const first= createLocationForPage(location, 0);
  const prev = createLocationForPage(location, currentPage - 1);
  const next = createLocationForPage(location, currentPage + 1);
  const last = createLocationForPage(location, totalPages);

  return (
    <nav>
      <ul className={styles.pagination}>
        {currentPage !== 0 && <li><NavLink to={first}>First</NavLink></li>}
        {currentPage > 0 && <li><NavLink to={prev}>Previous</NavLink></li>}
        <li><NavLink className={styles.active}>{currentPage}</NavLink></li>
        {currentPage < totalPages && <li><NavLink to={next}>Next</NavLink></li>}
        {currentPage !== totalPages && <li><NavLink to={last}>Last</NavLink></li>}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  startPage: PropTypes.number,
  currentPage: PropTypes.number,
  lastPage: PropTypes.number
};

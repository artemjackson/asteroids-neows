import React from 'react';
import PropTypes from 'prop-types';
import {
  Table, THead,
  Pagination
} from 'elements';

import styles from './styles';

export default function Summary({ asteroids = [], areAsteroidsFetching, onAsteroidSelect, pagination, itemsPerPage }) {
  return (
    <section className={styles.content}>
      <h1>Asteroids List:</h1>
      <Table
        className={styles.table}
        loading={areAsteroidsFetching}
        items={asteroids}
        onEntryClick={onAsteroidSelect}
      >
        <THead field="neo_reference_id">Id:</THead>
        <THead field="name">Name:</THead>
        <THead field="absolute_magnitude_h">Absolute Magnitude H:</THead>
      </Table>
      <Pagination
        itemsPerPage={itemsPerPage}
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
      />
    </section>
  );
}

Summary.propTypes = {
  asteroids: PropTypes.arrayOf(PropTypes.object),
  onAsteroidSelect: PropTypes.func,
  pagination: PropTypes.object,
  itemsPerPage: PropTypes.number
};

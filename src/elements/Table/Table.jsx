import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './styles';

export default function Table({ children, items, fields, onEntryClick }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.head}>
          {children.map((child, index) => (
              <th key={index} className={styles.column}>
                {child}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, rIndex) => (
          <tr
            key={rIndex}
            className={cx(styles.row, { [styles.clickable]: onEntryClick })}
            onClick={() => onEntryClick && onEntryClick(item)}
          >
            {fields.map((field, cIndex) => (
              <td key={cIndex} className={styles.column}>
                {item[field]}
              </td>
              ))} 
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  children: PropTypes.element.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  fields: PropTypes.arrayOf(PropTypes.element).isRequired,
  onEntryClick: PropTypes.func
};

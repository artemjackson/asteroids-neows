import React from 'react';
import styles from './styles';

export default function Preloader() {
  return (
    <div className={styles.track}>
      <div className={styles.thumb}></div>
    </div>
  );
}

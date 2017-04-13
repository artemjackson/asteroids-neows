import PropTypes from 'prop-types';
import { Link } from 'react-router';
import React from 'react';

import styles from './styles';

export default function Layout(props) {
  return (
    <div>
      <header className={styles.header}>
        <h1>
          <Link
            className={styles.link}
            to="/"
          >
            Asteroids - NeoWS
          </Link>
        </h1>
        <h3>
          <Link
            className={styles.link}
            target="_blank"
            href="https://api.nasa.gov/api.html#neows"
          >
            NASA Near Earth Object Web Service
          </Link>
        </h3>
      </header>
      <section className={styles.content}>
        {props.children}
      </section>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

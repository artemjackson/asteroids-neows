import React from 'react';

export default function Details({ asteroid }) {
  return (
    <section>
      <h1>Asteroid details:</h1>
      {asteroid && asteroid._cached &&
        <p>
          The value was given from cache (due to optimization)
          <br/>
          Reload the page in you want not cached one
        </p>}
      <pre>
      {asteroid ?
        JSON.stringify(asteroid, null, 2)
        :
        'Loading...'
      }
      </pre>
    </section>
  );
};

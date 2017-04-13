import { compose } from 'redux';
import { createSelector } from 'reselect';
import { domain } from './constants';

export const getState = (state) => state[domain];

export const getAsteroidsById = compose(
  ({ asteroidsById }) => asteroidsById,
  getState
);

export const getAsteroids = createSelector(
  [getAsteroidsById],
  (asteroidsById) => Object.values(asteroidsById)
);

export const getAsteroid = compose(
  ({ asteroid }) => asteroid,
  getState
);

export const getAreAsteroidsFetching = compose(
  ({ fetching }) => fetching.asteroids,
  getState
);

export const gaetPagination = compose(
  ({ pagination }) => pagination,
  getState
);

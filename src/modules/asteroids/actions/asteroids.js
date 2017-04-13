import { createAction } from 'redux-actions';
import { FETCH_ASTEROIDS, FETCH_ASTEROID_BY_ID, LOOKUP_ASTEROID_BY_ID } from './types';
import { getAsteroidsById } from '../selectors';
import api from '../api';

export const fetchAsteroids = createAction(FETCH_ASTEROIDS, query => api.fetchAsteroids(query));

export const fetchAsteroidById = createAction(FETCH_ASTEROID_BY_ID, id => api.fetchAsteroidById(id));

const _lookupAsteroidById = createAction(LOOKUP_ASTEROID_BY_ID, async (id, { getState }) => {
  const asteroids = getAsteroidsById(getState());

  const asteroid = asteroids[id];

  if (asteroid) {
    return { ...asteroid, _cached: true };
  }


  throw new Error('Asteroid was not found in cache');
});

export const lookupAsteroidById = (id) => async (dispatch, getState) => {
  try {
    return await dispatch(_lookupAsteroidById(id, { getState }));
  } catch (error) {
    return dispatch(fetchAsteroidById(id));
  }
}
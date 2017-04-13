import { handleActions } from 'redux-actions';
import { types as t } from '../actions';

const initialAsteroidsByIdState = {};

export default handleActions({
  [t.FETCH_ASTEROIDS.SUCCEED]: (stateAsteroidsById, { payload }) => ({
    ...payload.asteroidsById
  })
}, initialAsteroidsByIdState);

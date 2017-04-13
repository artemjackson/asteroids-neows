import { handleActions } from 'redux-actions';
import { types as t } from '../actions';

const initialAsteroidState = null;

export default handleActions({
  [t.LOOKUP_ASTEROID_BY_ID.SUCCEED]: (state, { payload }) => payload,
  [t.FETCH_ASTEROID_BY_ID.SUCCEED]: (state, { payload }) => payload
}, initialAsteroidState);

import { handleActions } from 'redux-actions';
import { types as t } from '../actions';

const initialFetchingState = {
  asteroids: false
};

export default handleActions({
  [t.FETCH_ASTEROIDS.PENDING]: (state) => ({
    ...state,
    asteroids: true
  }),
  [`${t.FETCH_ASTEROIDS.SUCCEED}||${t.FETCH_ASTEROIDS.FAILED}`]: (state) => ({
    ...state,
    asteroids: false
  })

}, initialFetchingState);

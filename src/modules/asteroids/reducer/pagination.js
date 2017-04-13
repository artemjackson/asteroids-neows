import { handleActions } from 'redux-actions';
import { types as t } from '../actions';

const initialPaginationState = {};

export default handleActions({
  [t.FETCH_ASTEROIDS.SUCCEED]: (statePagination, { payload }) => ({
    ...statePagination, 
    ...payload.pagination,
    currentPage: payload.currentPage,
    totalPages: payload.totalPages
  })
}, initialPaginationState);

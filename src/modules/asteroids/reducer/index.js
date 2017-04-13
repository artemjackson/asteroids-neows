import { combineReducers } from 'redux';
import asteroid from './asteroid';
import asteroidsById from './asteroidsById';
import fetching from './fetching';
import pagination from './pagination';

export default combineReducers({
  asteroid,
  asteroidsById,
  fetching,
  pagination
});

import { combineReducers } from 'redux';
import { name, reducer as asteroidsReducer } from 'asteroids';

export default combineReducers({
  [name]: asteroidsReducer
}); 

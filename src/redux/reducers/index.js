import {combineReducers} from 'redux';
import {sensor} from './sensor';
import {user} from './user';
import {signal} from './signal';

const rootReducer = combineReducers({
  sensor,
  user,
  signal,
});

export default rootReducer;

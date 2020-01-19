import { combineReducers } from 'redux';
import userReducer from './twitch/twitch.reducer';

export default combineReducers({
  user: userReducer
});

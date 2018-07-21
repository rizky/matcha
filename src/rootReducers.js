import { combineReducers } from 'redux';
import user from 'app/pages/Auth/reducer';
import feed from 'app/pages/Feed/reducer';
import discover from 'app/pages/Discover/reducer';

export default combineReducers({
  discover,
  feed,
  user,
});

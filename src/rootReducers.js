import { combineReducers } from 'redux';
import auth from 'app/pages/Auth/reducer';
import feed from 'app/pages/Feed/reducer';
import discover from 'app/pages/Discover/reducer';
import messages from 'app/pages/Messages/reducer';

export default combineReducers({
  auth,
  discover,
  feed,
  messages,
});

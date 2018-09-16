import { combineReducers } from 'redux';
import auth from 'src/pages/Auth/reducer';
import feed from 'src/pages/Feed/reducer';
import discover from 'src/pages/Discover/reducer';
import messages from 'src/pages/Messages/reducer';

import layout from 'src/components/Layout/reducer';

export default combineReducers({
  auth,
  discover,
  feed,
  layout,
  messages,
});

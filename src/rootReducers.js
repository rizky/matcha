import { combineReducers } from 'redux';
import auth from 'src/pages/Auth/reducer';

import layout from 'src/components/Layout/reducer';

export default combineReducers({
  auth,
  layout,
});

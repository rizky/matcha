import { combineReducers } from 'redux';
import user from 'app/pages/Auth/reducer';
import photos from 'app/pages/Feed/reducer';

export default combineReducers({
  photos,
  user,
});

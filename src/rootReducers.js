import { combineReducers } from 'redux';
import user from 'app/pages/Auth/reducer';
import photos from 'app/components/Photos/reducer';

export default combineReducers({
  photos,
  user,
});

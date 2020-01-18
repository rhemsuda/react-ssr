import {combineReducers} from 'redux';
import user from './user/reducer';
import error from './error/reducer';
import auth from './auth/reducer';
import jobsearch from './jobsearch/reducer';
import profile from './profile/reducer';
export default combineReducers({
  auth, user, jobsearch, profile, error
});
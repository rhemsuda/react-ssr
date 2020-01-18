import {loadJobPostings} from './actions';
import {loadFailed} from '../error/actions';

export const getJobPostings = () => async (dispatch, getState, api) => {
  let response = await api.post('/getJobPostings');
  if(response.status === 200) {
    dispatch(loadJobPostings(response.data));
  } else {
    dispatch(loadFailed());
  }
}
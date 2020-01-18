import { 
  SET_USER_SESSION,
  END_USER_SESSION
} from './actions';

export default (state = null, {type, payload}) => {
  switch(type) {
    case SET_USER_SESSION:
      return payload.user;
    case END_USER_SESSION:
      return null;
    default:
      return state;
  }
}
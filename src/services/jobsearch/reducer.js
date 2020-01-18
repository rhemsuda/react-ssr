import { 
  LOAD_JOB_POSTINGS
} from './actions';

export default (state = null, {type, payload}) => {
  switch(type) {
    case LOAD_JOB_POSTINGS:
      return payload;
    default:
      return state;
  }
}
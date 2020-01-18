import { 
  SET_TWEETS,
  CLEAR_TWEETS
} from './actions';

export default (state = {}, {type, payload}) => {
  switch(type) {
    case SET_TWEETS:
      console.log('payload', payload.tweetData[0])
      return {tweetData: payload.tweetData};
      //return Object.assign({}, state, {tweetData: payload.tweetData});
    case CLEAR_TWEETS:
      return {tweetData: null};
    default:
      return state;
  }
}
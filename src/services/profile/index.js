import axios from 'axios';
import {setTweets} from './actions';
import {loadFailed} from '../error/actions';

const twitterApi = axios.create({
  baseURL: 'https://api.twitter.com/',
  timeout: 2000,
  headers: {
    'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAOvw%2BQAAAAAAWvYYk0fzdrAmN%2Ft3x5I%2Bq%2BWf7h8%3D0Vj5lqVuU09uLTyVee3cL80lohPOB3PSkoR3NvXv1vG4f77uBY', 
    'Accept-Encoding': 'application/gzip'
  }
});

export const getTweets = (data) => async (dispatch, getState, api) => {
  const twitterParameters = { 
    screen_name: data.screenName,
    count: data.numberOfTweets
  }

  let response = await twitterApi.get('/1.1/statuses/user_timeline.json', {params: twitterParameters});
  const tweetData = [];
  response.data.forEach(data => {
    const dataObj = {
      id_str: data.id_str,
      user: data.user,
      text: data.text,
      create_at: data.created_at,
      favorite_count: data.favorite_count,
      retweet_count: data.retweet_count,
      entities: data.entities
    };
    tweetData.push(dataObj);
  })
  dispatch(setTweets(tweetData));
}
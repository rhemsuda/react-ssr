export const SET_TWEETS = 'profile:setTweets';
export const setTweets = (tweetData) => ({
  type: SET_TWEETS,
  payload: {tweetData}
})

export const CLEAR_TWEETS = 'profile:clearTweets';
export const clearTweets = () => ({
  type: CLEAR_TWEETS
})
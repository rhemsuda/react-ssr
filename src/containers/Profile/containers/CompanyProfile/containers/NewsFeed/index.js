import React, {Component} from 'react';
import { connect } from 'react-redux';
import Tweet from 'react-tweet'
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';

class NewsFeed extends Component {
  constructor(props) {
    super(props);
  }

  renderTweets() {
    const linkProps = {target: '_blank', rel: 'noreferrer'}
    return (
      (this.props.tweetData !== undefined) ? (
        this.props.tweetData.map((tweetData, index) => {
          return (
            <Tweet style={{width: '100%'}} key={index} data={tweetData} linkProps={linkProps}/>
          )
        })
      ) : null
    )
  }

  render() {
    return (
      <div className="row border border-top-0 p-2 bg-white justify-content-center">
        <h5 className="col-md-12">News Feed</h5>
        {this.renderTweets()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile
})


export default withStyles(s)(connect(mapStateToProps)(NewsFeed));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../_hocs/RequireAuth';
import ProgrammerProfile from './containers/ProgrammerProfile';
import CompanyProfile from './containers/CompanyProfile';
import CoverPhoto from './containers/CompanyProfile/components/CoverPhoto';
import {getTweets} from '../../services/profile';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          {(this.props.accountType === 0 ) ? (
            <ProgrammerProfile/>
          ) : (
            <CompanyProfile/>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({
  accountType: user.accountType
})

const mapDispatchToProps = {
  getTweets
}

const loadData = (store, matchParams) => {
  return store.dispatch(getTweets({screenName: matchParams.id, numberOfTweets: 20}));
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(requireAuth(Profile)),
  loadData
}
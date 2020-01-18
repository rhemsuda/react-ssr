import React, {Component} from 'react';
import {connect} from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import ProfileHeader from './components/ProfileHeader';
import PanelSwitcher from './components/PanelSwitcher';
import CompanyInfo from './containers/CompanyInfo';
import JobPostingsView from './containers/JobPostingsView';
import NewsFeed from './containers/NewsFeed';
import CoverPhoto from './components/CoverPhoto';
import { clearTweets } from '../../../../services/profile/actions';


class CompanyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProfilePanel: 'info',
      tweetData: undefined
    }
    this.setSelectedPanel = this.setSelectedPanel.bind(this);
  }


  componentDidMount() {
    if(this.props.profile && this.props.profile.tweetData !== null) {
      this.setState({tweetData: this.props.profile.tweetData});
      this.props.clearTweets();
    }
  }

  setSelectedPanel(panel) {
    this.setState({selectedProfilePanel: panel});
  }

  render() {
    return (
      <div>
        <CoverPhoto/>
        <div className="container-fluid page" style={{paddingTop: '15%'}}>
          <ProfileHeader/>
          <PanelSwitcher setSelectedPanel={this.setSelectedPanel} selectedProfilePanel={this.state.selectedProfilePanel}/>
          {
            (this.state.selectedProfilePanel === 'info') ?
              <CompanyInfo/>
            : (this.state.selectedProfilePanel === 'posting') ?
              <JobPostingsView/>
            :
              <NewsFeed tweetData={this.state.tweetData}/>
          }    
        </div> 
      </div>  
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  profile: state.profile
})

const mapDispatchToProps = {
  clearTweets
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
export default withStyles(s)(connectedComponent);
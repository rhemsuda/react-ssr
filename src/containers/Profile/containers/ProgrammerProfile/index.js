import React, {Component} from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import ProfileHeader from './components/ProfileHeader';
import AchievementsPanel from './components/AchievementsPanel';
import WorkExperiencePanel from './components/WorkExperiencePanel';
import VolunteerExperiencePanel from './components/VolunteerExperiencePanel';
import InterestsPanel from './components/InterestsPanel';
import ViewReferencesModal from './modals/ViewReferencesModal';

class ProgrammerProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (    
      <div className="container-fluid">
        <ProfileHeader user={this.props.user}/>
        <AchievementsPanel/>
        <WorkExperiencePanel/>
        <VolunteerExperiencePanel/>
        <InterestsPanel/>
        <ViewReferencesModal/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const connectedComponent = connect(mapStateToProps)(ProgrammerProfile);
export default withStyles(s)(connectedComponent);
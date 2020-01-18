import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import hackthenorth from './images/hackthenorth.jpg'

const VolunteerExperiencePanel = (props) => {
  return (
    <div className="row border border-top-0 p-2 bg-white">
      <h3 className="col-md-12">Volunteer Experience</h3>
      <div className="col-md-6 mb-2">
        <div className="border rounded pb-2">
          <img className="pull-left mx-2 mt-2 small-icon" src={hackthenorth}/>
          <span className="pull-right mr-2">May 2018</span>
          <h5 className="mt-2">Hack the North</h5>
          <span id="volunteer-experience-role">Registration Volunteer</span>
        </div>
      </div>
      <div className="col-md-6 mb-2">
        <div className="border rounded pb-2">
          <img className="pull-left mx-2 mt-2 small-icon" src={hackthenorth}/>
          <span className="pull-right mr-2">May 2018</span>
          <h5 className="mt-2">Hack the North</h5>
          <span id="volunteer-experience-role">Registration Volunteer</span>
        </div>
      </div>
      <div className="col-md-6 mb-2">
        <div className="border rounded pb-2">
          <img className="pull-left mx-2 mt-2 small-icon" src={hackthenorth}/>
          <span className="pull-right mr-2">May 2018</span>
          <h5 className="mt-2">Hack the North</h5>
          <span id="volunteer-experience-role">Registration Volunteer</span>
        </div>
      </div>
      <div className="col-md-6 mb-2">
        <div className="border rounded pb-2">
          <img className="pull-left mx-2 mt-2 small-icon" src={hackthenorth}/>
          <span className="pull-right mr-2">May 2018</span>
          <h5 className="mt-2">Hack the North</h5>
          <span id="volunteer-experience-role">Registration Volunteer</span>
        </div>
      </div>
      <div className="col-md-6 mb-2">
        <div className="border rounded pb-2">
          <img className="pull-left mx-2 mt-2 small-icon" src={hackthenorth}/>
          <span className="pull-right mr-2">May 2018</span>
          <h5 className="mt-2">Hack the North</h5>
          <span id="volunteer-experience-role">Registration Volunteer</span>
        </div>
      </div>
    </div>
  )
}

export default withStyles(s)(VolunteerExperiencePanel);
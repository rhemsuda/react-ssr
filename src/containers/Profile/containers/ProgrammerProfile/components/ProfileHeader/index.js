import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import defaultProfile from './images/default_profile.jpg';
import certificate from './images/fullstack_cert.jpg';
import facebook from './images/facebook.png';
import github from './images/github.png';
import gmail from './images/gmail.png';
import conestoga from './images/conestoga.jpg';
import microsoft from './images/microsoft.png';
import canada from './images/canada.png';
import whistler from './images/whistler.png';

const ProfileHeader = (props) => {
  return (
    <div className="row border p-2 bg-white">
      <div className="column">
        <img className="rounded-circle" id="profilePicture" src={defaultProfile}/>
        <h5 id="nameLabel">{props.user.name}</h5>
        <img id="certificate" src={certificate}/>
      </div>   

      <div className="column ml-2 mt-1">
        <a href={props.user.facebookURL} target="_blank"><img className="small-icon" src={facebook}/></a>
        <br/>
        <a href={props.user.gihubURL} target="_blank"><img className="small-icon" src={github}/></a>
        <br/>
        <a href={props.user.googleMailURL} target="_blank"><img className="small-icon" src={gmail}/></a>
      </div>   
      
      <div className="ml-5 mt-1">
        <h5>Current Workplace</h5>
        <div className="border rounded mb-2">
          <img className="small-icon" src={microsoft}/>
          <span className="mx-2">Senior Software Developer</span>
        </div>
        <h5 className="mt-4">Recent Education</h5>
        <div className="border rounded mb-2">
          <img className="small-icon" src={conestoga}/>
          <span className="mx-2">Software Engineering Technology</span>
        </div>
      </div>
      <div className="ml-5 mt-1">
        <h5>Location</h5>
        <div className="border rounded mb-2">
        <img className="small-icon" src={canada}/>
          <span className="mx-2">Waterloo, Ontario</span>
        </div>
        <h5 className="mt-4">Favourite Activity</h5>
        <div className="border rounded mb-2">
          <img className="small-icon" src={whistler}/>
          <span className="mx-2">Snowboarding</span>
        </div>
      </div>  
      <div className="column ml-auto">
      <div className="dropdown show">
        <a className="btn btn-primary dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Options
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a href="javascript:;" className="dropdown-item">Edit Profile</a>
        </div>
      </div>
      </div>   
    </div>  
  )
}

export default withStyles(s)(ProfileHeader);
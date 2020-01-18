import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import github from './images/github.png';

const ProfileHeader = (props) => {
  return (
    <div className="row border rounded-top p-2 bg-white" style={{zIndex: 9999}}>
      <div className="col-md-2">
        <img className="rounded-circle text-center" id="companyProfile" src={github}/>
        <h5 className="mt-2" id="nameLabel">Github</h5>
      </div>   
      <div className="col-md-2">
        <h6 className="mt-2" style={{marginBottom: '0px'}}><strong>Website</strong></h6>
        <a className="" href="http://github.com" target="_blank">http://github.com</a>
        <h6 className="mt-2" style={{marginBottom: '0px'}}><strong>Company Size</strong></h6>
        <span className="">800 employees</span>
        <h6 className="mt-2" style={{marginBottom: '0px'}}><strong>Year Founded</strong></h6>
        <span className="">2008</span>
      </div>
      <div className="col-md-8">
        <h6 className="ml-3 mt-2" style={{marginBottom: '0px'}}><strong>About</strong></h6>
        <p className="ml-3" style={{wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Suspendisse potenti. Cras lobortis condimentum magna, ut vehicula turpis dapibus sit amet. Pellentesque hendrerit ultricies massa, a mattis purus rhoncus mollis. Mauris egestas leo id mauris euismod maximus. Proin feugiat tincidunt laoreet.</p>
      </div>
    </div>   
  )
}

export default withStyles(s)(ProfileHeader);
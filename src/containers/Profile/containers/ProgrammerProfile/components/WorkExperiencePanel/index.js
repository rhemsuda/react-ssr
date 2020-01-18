import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import microsoft from './images/microsoft.png';

const WorkExperiencePanel = (props) => {
  return (
    <div className="row border border-top-0 p-2 bg-white">
      <h3 className="col-md-12">Work Experience</h3><br/>

      <div className="col-md-12 mb-3">
        <div className="border rounded">
          <img className="work-experience-icon pull-left mx-2 mt-2" src={microsoft}/>
          <h5 className="mt-2">Microsoft - Senior Software Developer</h5>
          <h6 className="work-experience-date">2012-2016</h6> 
          <p className="mx-3 work-experience-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Suspendisse potenti. Cras lobortis condimentum magna, ut vehicula turpis dapibus sit amet. Pellentesque hendrerit ultricies massa, a mattis purus rhoncus mollis. Mauris egestas leo id mauris euismod maximus. Proin feugiat tincidunt laoreet.</p> 
          <a href="javascript:;" data-toggle="modal" data-target="#workExperienceModal" className="m-3 view-references">View references</a> 
        </div>
      </div>

      <div className="col-md-12 mb-3">
        <div className="border rounded">
          <img className="work-experience-icon pull-left mx-2 mt-2" src={microsoft}/>
          <h5 className="mt-2">Microsoft - Senior Software Developer</h5>
          <h6 className="work-experience-date">2012-2016</h6> 
          <p className="mx-3 work-experience-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Suspendisse potenti. Cras lobortis condimentum magna, ut vehicula turpis dapibus sit amet. Pellentesque hendrerit ultricies massa, a mattis purus rhoncus mollis. Mauris egestas leo id mauris euismod maximus. Proin feugiat tincidunt laoreet.</p> 
          <a href="javascript:;" data-toggle="modal" data-target="#myModal" className="m-3 view-references">View references</a> 
        </div>
      </div>

      <div className="col-md-12 mb-3">
        <div className="border rounded">
          <img className="work-experience-icon pull-left mx-2 mt-2" src={microsoft}/>
          <h5 className="mt-2">Microsoft - Senior Software Developer</h5>
          <h6 className="work-experience-date">2012-2016</h6> 
          <p className="mx-3 work-experience-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Suspendisse potenti. Cras lobortis condimentum magna, ut vehicula turpis dapibus sit amet. Pellentesque hendrerit ultricies massa, a mattis purus rhoncus mollis. Mauris egestas leo id mauris euismod maximus. Proin feugiat tincidunt laoreet.</p> 
          <a href="javascript:;" data-toggle="modal" data-target="#myModal" className="m-3 view-references">View references</a> 
        </div>
      </div>
    </div>
  )
}

export default withStyles(s)(WorkExperiencePanel);
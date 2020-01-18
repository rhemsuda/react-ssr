import React from 'react';

const JobPostingPanel = (props) => {
  return (
    <div className="col-md-12 mb-3 py-2 border rounded">
      <div>
        <img className="pull-left mr-3" src={props.image} style={{maxWidth: '125px'}}/>
        <button className="btn btn-link pull-right" href="javascript:;">Edit</button>
      </div>

      <div className="">
        <h5>{`${props.companyName} - ${props.role}`}</h5>
        <h6 className="text-secondary">{props.location}</h6>
        <p>{props.description}</p>  
      </div>
    </div>
  )
}

export default JobPostingPanel;
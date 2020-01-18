import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';

const CompanyHistoryLinks = (props) => {
  return (
    <div className="modal" id="externalLinksModal">
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Reference Links</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>

          <div className="modal-body" id="historylinks-scroll-area">
            {props.links.map((l, i) => {
              return (<div key={i} className="col-md-12 border rounded mb-2 p-2">
                <h5>Description</h5>
                <p>{l.description}</p>
                <a href={l.link} target="_blank">Visit Webpage</a>
              </div>)
            })}
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default withStyles(s)(CompanyHistoryLinks);
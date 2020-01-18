import React from 'react';

const PanelSwitcher = (props) => {
  const infoStyle = (props.selectedProfilePanel === 'info') ? {backgroundColor: '#dfe4ea'} : {};
  const postingStyle = (props.selectedProfilePanel === 'posting') ? {backgroundColor: '#dfe4ea'} : {};
  const newsfeedStyle = (props.selectedProfilePanel === 'news') ? {backgroundColor: '#dfe4ea'} : {};
  return (
    <div className="row border border-top-0 bg-white justify-content-center">
      <ul className="pagination justify-content-center my-1">
        <li className="page-item account-type-selector" onClick={() => props.setSelectedPanel('info')}>
          <a className="page-link text-center py-1 px-3" style={infoStyle}>Company Info</a>
        </li>
        <li className="page-item account-type-selector" onClick={() => props.setSelectedPanel('posting')}>
          <a className="page-link text-center py-1 px-3" style={postingStyle}>Job Postings</a>
        </li>
        <li className="page-item account-type-selector" onClick={() => props.setSelectedPanel('news')}>
          <a className="page-link text-center py-1 px-3" style={newsfeedStyle}>News Feed</a>
        </li>
      </ul>
    </div>
  )
}

export default PanelSwitcher;
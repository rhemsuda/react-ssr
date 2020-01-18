import React from 'react';

const PanelSwitcher = (props) => {
  const skillStyle = (props.selectedTestPanel === 'skill') ? {backgroundColor: '#dfe4ea'} : {};
  const personalityStyle = (props.selectedTestPanel === 'personality') ? {backgroundColor: '#dfe4ea'} : {};
  return (
    <div className="row border border-top-0 bg-white justify-content-center">
      <ul className="pagination justify-content-center my-1">
        <li className="page-item account-type-selector" onClick={() => props.setSelectedPanel('skill')}>
          <a className="page-link text-center py-1 px-3" style={skillStyle}>Technical Ability Tests</a>
        </li>
        <li className="page-item account-type-selector" onClick={() => props.setSelectedPanel('personality')}>
          <a className="page-link text-center py-1 px-3" style={personalityStyle}>Personality Test</a>
        </li>
      </ul>
    </div>
  )
}

export default PanelSwitcher;
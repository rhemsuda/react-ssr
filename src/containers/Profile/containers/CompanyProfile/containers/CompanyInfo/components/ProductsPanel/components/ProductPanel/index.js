import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import LinesEllipsis from 'react-lines-ellipsis';

const ProductPanel = (props) => {
  return (
    <div className="border rounded text-wrap text-center" style={{width: '240px'}}>
      <img className="mt-2 mx-2 pull-left" src={props.image} style={{maxWidth: '30px'}}/>
      <h5 style={{marginTop: "15px"}}>{props.name}</h5>
      <hr className="m-0"/>
      <div className="text-justify px-2 py-2">
        <LinesEllipsis
          text={props.description}
          maxLine='5'
          ellipsis='...'
          basedOn='letters'
        />
      </div>  
      <div className="col-md-12 py-2">
        <button className="btn btn-primary col-md-12" onClick={props.onButtonClick} data-toggle="modal" data-target="#productDetailsModal">More Details</button>
      </div>
    </div>
  )
}

export default withStyles(s)(ProductPanel);
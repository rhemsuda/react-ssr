import React from 'react';

const ProductDetailsModal = (props) => {
  return (
    <div className="modal mt-5" id="productDetailsModal">
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Product Details</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>

          <div className="modal-body" style={{overflowY: 'scroll', height: '50%'}}>
            <img className="img-rounded pull-left" src={props.image} style={{width:'45px'}}/>
            <h4 className="mt-1">{props.name}</h4>
            <strong className="mr-2">Release Date</strong>
            <span>{props.releaseDate}</span>
            <strong className="mr-2 ml-3">Current Version</strong>
            <span>{props.currentVersion}</span>
            <hr/>
            <strong className="pull-left">Description</strong><br/>
            <p className="text-justify">{props.description}</p>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsModal;
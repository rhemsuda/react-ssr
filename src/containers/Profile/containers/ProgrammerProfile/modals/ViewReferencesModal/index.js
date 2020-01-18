import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import envelope from './images/envelope.png';

const ViewReferencesModal = (props) => {
  return (
    <div className="modal" id="workExperienceModal">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">References</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>

          <div className="modal-body" id="reference-scroll-area">
            <div className="col-md-12">
              <div className="border rounded m-2">
              <a href={"mailto:mike_rohan@gmail.com"}><img src={envelope} className="pull-right m-2" style={{width: 16}}/></a>
                <h5 className="mx-2 mt-2">Mike Rohan</h5>
                <h6 className="mx-2">Technically Compatible</h6>
                <p className="mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Suspendisse potenti. Cras lobortis condimentum magna, ut vehicula turpis dapibus sit amet. Pellentesque hendrerit ultricies massa, a mattis purus rhoncus mollis. Mauris egestas leo id mauris euismod maximus. Proin feugiat tincidunt laoreet.</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="border rounded m-2">
              <a href={"mailto:yaboy_elon@gmail.com"}><img src={envelope} className="pull-right m-2" style={{width: 16}}/></a>
                <h5 className="mx-2 mt-2">Elon Musk</h5>
                <h6 className="mx-2">SpaceX, Tesla, Neuralink, The Boring Company, SolarRoof</h6>
                <p className="mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Suspendisse potenti. Cras lobortis condimentum magna, ut vehicula turpis dapibus sit amet. Pellentesque hendrerit ultricies massa, a mattis purus rhoncus mollis. Mauris egestas leo id mauris euismod maximus. Proin feugiat tincidunt laoreet.</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="border rounded m-2">
              <a href={"mailto:satya_nadella@gmail.com"}><img src={envelope} className="pull-right m-2" style={{width: 16}}/></a>
                <h5 className="mx-2 mt-2">Satya Nadella</h5>
                <h6 className="mx-2">Microsoft</h6>
                <p className="mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Suspendisse potenti. Cras lobortis condimentum magna, ut vehicula turpis dapibus sit amet. Pellentesque hendrerit ultricies massa, a mattis purus rhoncus mollis. Mauris egestas leo id mauris euismod maximus. Proin feugiat tincidunt laoreet.</p>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default withStyles(s)(ViewReferencesModal);
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid';
import JobSearchPosting from './components/JobSearchPosting'
import requireAuth from '../_hocs/RequireAuth';
import matchDonut from '../Home'
import { getJobPostings } from '../../services/jobsearch';

class JobSearch extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount() {
    console.log('p', this.props.postings);
    if(!this.props.postings) {
      console.log('getjobpostings');
      this.props.getJobPostings();
    }
  }

  render(){
    return(
      <div className="container pt-5">
        <div className="row">
          <h1 className="display-4 col-md-4">
            Recommended {this.g}
            
          </h1>
          <div className="col-md-2 d-flex align-items-center">
            <select className="form-control form-control-sm">
              <option>By match score</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <div className="col-md-6 d-flex flex-row-reverse align-items-center">
            <form className="form-inline p-0 m-0">
              <i className="fas fa-search"></i>
              <input className="form-control form-control-sm ml-3 w-75 p-0" type="text" placeholder="Search" aria-label="Search"/>
            </form>
          </div>
        </div>
        <hr className="col-md-11 border mt-3"/>
        <div className="container ml-5 pt-3">
        {console.log('postings', this.props.postings)}
          {    
            
            this.props.postings ? this.props.postings.map((p,i) => {
              return (
                <div key={i} className="py-2">
                  <JobSearchPosting {...p}/>
                </div>
              )
            }) : null
          }
        </div>
      </div>
    )
  }
}

const loadData = ({dispatch}) => {
  return dispatch(getJobPostings());
}

const mapStateToProps = ({jobsearch}) => ({
  postings: jobsearch
})

const mapDispatchToProps = {
  getJobPostings
}

export default {
  loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(requireAuth(JobSearch))
};
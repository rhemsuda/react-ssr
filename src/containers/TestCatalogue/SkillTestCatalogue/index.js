import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import GoToTestCard from './components/GoToTestCard'
import TestCompletedCard from './components/TestCompletedCard'

class SkillTestCatalogue extends Component {
  constructor(props) {
    super(props)

    this.state = {
      complete: [1,2,3,4],
      incomplete: [1,2,3,4]
    }
  }

  render() {
    return (
      <div className="container pt-4">
        <div className="row">
          <h1 className="display-4 col-md-6">
            Technical Ability Tests
          </h1>
          <div className="col-md-2 d-flex align-items-center">
            <select className="form-control form-control-sm">
              <option>By relevance</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <div className="col-md-4 d-flex flex-row-reverse align-items-center">
            <form className="form-inline p-0 m-0">
              <i className="fas fa-search"></i>
              <input className="form-control form-control-sm ml-3 w-75 p-0" type="text" placeholder="Search" aria-label="Search"/>
            </form>
          </div>
        </div>
        <hr className="col-md-11 border mt-3"/>
        {/* Complete Section */}
        <h4>Completed</h4>
        {/* Incomplete Section with Scroll */}
        {    
            this.state.complete.map((c,i) => {
              return (
                <div key={i} className="py-2">
                  <TestCompletedCard {...c}/>
                </div>
              )
            })
        }
        <h4>Available to Take</h4>
        {    
            this.state.incomplete.map((c,i) => {
              return (
                <div key={i} className="py-2">
                  <GoToTestCard {...c}/>
                </div>
              )
            })
        }
      </div>
    )
  }
};

export default SkillTestCatalogue;
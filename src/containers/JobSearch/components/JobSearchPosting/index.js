import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import { Link } from 'react-router-dom'
import { Doughnut, HorizontalBar } from 'react-chartjs-2'
import dropdownArrow from './images/down-arrow.png';

const JobSearchPosting = (props) => {
  // let donut = d3.select('document')
  return (
    <div className="row border rounded col-md-11 px-0 pt-2">
      <div className="col-md-2 px-0 d-flex align-items-start">
        <img id="companyUserLogo" src={props.logo} className="col-md-12 ml-4 mr-2 mt-0 py-2 pr-3 rounded-circle " />
      </div>
      <ul className="col-md-7 pr-0 pl-4">
        <h2 id="jobTitle" className="pt-1 mb-0">{props.companyName} - {props.jobTitle} </h2>
        <div > <i>{props.commuteCityName} ({props.commuteCityTime}) </i> </div>
        <hr className="col-md-8 pb-3 my-3 d-inline-flex" /> <br></br>
        <text className="py-1"> {props.companyDescription} </text>
      </ul>

      <div className="col-md-3">
        <div className="row d-flex justify-content-center py-3">
          <button className="btn btn-primary col-md-4" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Apply
            </button>
        </div>
        {/* <StatusRing test="test"/> */}
          
        <div id="donut" className="col-md-12 d-flex justify-content-center">
          <text className="score">87</text>
          <div id="ringOne">
          <Doughnut
            
            data={props.matchScoreCircles.matchScoreCircleOne}
            options={{
              legend: {
                display: false //change to modal
              },
              responsive: true,
              maintainAspectRatio: true,
              cutoutPercentage: 88,
              circumference: 2*Math.PI * props.tempScore /100
            }}
          />
          </div> 
         
          <div id="ringTwo">
          <Doughnut       
            data={props.matchScoreCircles.matchScoreCircleTwo}
            options={{
              legend: {
                display: false //change to modal
              },
              responsive: true,
              maintainAspectRatio: false,
              cutoutPercentage: 88,
              circumference: 2*Math.PI * props.tempScore /100  
            }}
          />  
          </div>
        </div>
      </div>

      {console.log(props.postingID)}
      <div className="col-md-12 d-flex justify-content-center pt-2">
        <button className="btn col-md-1" type="button" data-toggle="collapse" data-target={`#${props.postingID}`} aria-expanded="false" aria-controls={props.postingID}>
          <img id="dropdownArrow" src={dropdownArrow} />
        </button>
      </div>
      {/* DropDown Portion */}
      <div className="collapse col-md-12" id={props.postingID}>
        <div className="container">
          {/* row 1 with descr and chart */}
          <div className="row">
            <div className="col-md-6">
              <h5>Job Description</h5>
              {props.jobDescription}
            </div>
            <div className="col-md-6">
              {/* bar chart that gets passed the qualifications data */}
              <HorizontalBar
                data={props.qualificationsSetup}
                options={{
                  scales: {
                    xAxes: [{
                      stacked: true
                    }],
                    yAxes: [{
                      stacked: true
                    }]
                  }
                }}
              />
            </div>
          </div>
          <div className="row pt-2">
            <div className="container col-md-12 pb-2">
              <h5>Compensation and Perks</h5>
            </div>
            <div className="col-md-3">
              <p> Salary: {props.salary}</p>
              <p> Equity: {props.equityPercent}</p>
            </div>
            <div className="col-md-3">
              <p> Vacation Time: {props.vacation}</p>
              <p> Bonuses: {props.bonus}</p>
            </div>
            <div className="col-md-6">
              {
                props.amenitiesTags.map((t, i) => {
                  return (
                    <div className="d-inline-flex p-2 m-1 border rounded" key={i}>
                      {t}
                    </div>
                  )
                })
              }
            </div>
          </div>
          {/* row 2 with compensation */}
        </div>
      </div>
    </div>
  )
}

export default withStyles(s)(JobSearchPosting)
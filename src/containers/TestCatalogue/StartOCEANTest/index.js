import React from 'react';
import oceanGraphic from './images/ocean.png'

const StartOCEANTest = () => {
  return (
    <div className="container pt-5 col-md-9">
      <div className="border rounded p-4 ">
        <h1 className="d-flex justify-content-center pb-4 display-4">OCEAN Personality Test</h1>
        <img src={oceanGraphic} className="w-50 h-50 rounded mx-auto d-block py-4" ></img>
        <h5 >Why do we care about your Personality?</h5>
        <p>Personality serves as a strong predictor for the role you will play as part of a new team. For the employers, it gives them the ability to get to know you a little faster. </p>
        <h5>Why should you care about your results?</h5>
        <p>OCEAN/The Big 5 focus on how we prioritize tasks in an uncertain, professional setting. Understanding your own personality traits can give you more self awareness   and lead to better coordination between you and team members in the future. This is why we care about personality, so that we can match you with a mutually beneficial team. </p>
        <h5>How does OCEAN/The Five Factor Model work?</h5>
        <p>It is important not to try and “game the system”. While there are some personality tests that over-extend their insights, we see personality as how you are likely perceived in a social setting. It does not assess your capabilities like the coding challenges but evaluates how you fit into a team. Overall, it eliminates a lot of bias that can be highly problematic in the hiring process. </p>
        <a href="">Learn more about OCEAN and how it affects your search results</a>
        <div className="row d-flex justify-content-center pt-5">
          <button type="button" className="btn btn-outline-primary"><h5 className="py-2 px-3">Get Started</h5></button>
        </div>
        <div className="row d-flex justify-content-center">
          <p>Approximately 8 minutes</p>  
        </div>
      </div>
    </div>
  )

};

export default StartOCEANTest;
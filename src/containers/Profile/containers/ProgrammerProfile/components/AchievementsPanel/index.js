import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import TestScorePanel from './components/TestScorePanel';

const achievements = [
  {
    name: "Advanced Python",
    score: 94,
    date: 'March 27, 2018'
  },
  {
    name: "Statistics III",
    score: 89,
    date: 'May 2, 2018'
  },
  {
    name: "Calculus IV",
    score: 88,
    date: 'February 16, 2018'
  },
  {
    name: "D3",
    score: 86,
    date: 'December 22, 2018'
  },
  {
    name: "Data Warehousing",
    score: 85,
    date: 'February 2, 2019'
  },
  {
    name: "Image Recognition",
    score: 85,
    date: 'November, 2018'
  }
]

const AchievementsPanel = (props) => {
  return (
    <div className="row border border-top-0 p-2 bg-white">
      <h3>Achievements</h3>
      <div className="col-xl-12 col-lg-12 my-3 scrollMenu">
        {achievements.map((a, id)=> {
          return <div key={id} className="testScorePanel mx-3" style={{width: 150}}>
            <TestScorePanel {...a}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default withStyles(s)(AchievementsPanel)
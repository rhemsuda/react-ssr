import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';

const TestScorePanel = (props) => {
  return (
    <div className="border rounded text-center text-wrap">
      <span className="mx-2">{props.name}</span>
      <h1 className="my-3">{props.score}</h1>
      <span className="mx-2">{props.date}</span>
    </div>
  )
}

export default withStyles(s)(TestScorePanel);
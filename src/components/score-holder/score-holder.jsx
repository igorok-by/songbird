import React from 'react';
import './score-holder.scss';

const ScoreHolder = ({score}) => {
  return (
    <h4 className="score-holder">
      Счёт: 
      <span>{` ${score}`}</span>
    </h4>
  )
};

export default ScoreHolder;

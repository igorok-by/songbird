import React from 'react';

const ScoreHolder = ({score}) => {
  return (
    <h4 className="header__score">
      Счёт: 
      <span>{` ${score}`}</span>
    </h4>
  )
};

export default ScoreHolder;

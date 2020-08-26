import React from 'react';
import './bird-name.scss';

const BirdName = ({isQuestionOpen, birdData}) => {
  let birdName = birdData.name;
  if (isQuestionOpen) {
    birdName = '******';
  }

  return (
    <h4>{birdName}</h4>
  )
};

export default BirdName;

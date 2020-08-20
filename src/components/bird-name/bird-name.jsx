import React from 'react';
import './bird-name.scss';

const BirdName = ({birdName = '******'}) => {
  return (
    <h4>{birdName}</h4>
  )
};

export default BirdName;

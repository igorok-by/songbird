import React from 'react';
import './bird-description.scss';

const BirdDescription = ({birdData}) => {
  return (
    <p className="bird-description">
      {birdData}
    </p>
  )
};

export default BirdDescription;

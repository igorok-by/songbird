import React from 'react';
import './bird-description.scss';

const BirdDescription = ({description}) => {
  return (
    <p className="bird-description">
      {description}
    </p>
  )
};

export default BirdDescription;

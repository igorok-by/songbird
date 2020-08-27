import React from 'react';
import './bird-name.scss';

const BirdName = ({isQuestionOpen, birdData}) => {

  const Name = () => {
    if (isQuestionOpen) return '******';

    return (
      <>
        {birdData.name}
        <span> {`(${birdData.species})`}</span>
      </>
    )
  };

  return (
    <h4><Name /></h4>
  )
};

export default BirdName;

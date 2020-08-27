import React from 'react';
import './answer-container.scss';
import BirdsList from '../birds-list';
import BirdDetails from '../bird-details';

const AnswerContainer = ({isAnswerEverClicked, currNumberOfClickedBird, birdGroupData, handleAnswerClick}) => {
  return (
    <div className="col-12 mb-4 answer-container">
      <div className="row">
        <BirdsList
          birdGroupData={birdGroupData}
          handleAnswerClick={handleAnswerClick} />
        <BirdDetails
          isAnswerEverClicked={isAnswerEverClicked}
          birdData={birdGroupData[currNumberOfClickedBird]} />
      </div>
    </div>
  )
};

export default AnswerContainer;

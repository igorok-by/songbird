import React from 'react';
import './answer-container.scss';
import BirdsList from '../birds-list';
import BirdDetails from '../bird-details';

const AnswerContainer = () => {
  return (
    <div className="col-12 mb-4 answer-container">
      <div className="row">
        <BirdsList />
        <BirdDetails />
      </div>
    </div>
  )
};

export default AnswerContainer;

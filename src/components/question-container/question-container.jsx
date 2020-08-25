import React from 'react';
import './question-container.scss';
import BirdPicture from '../bird-picture';
import BirdName from '../bird-name';
import Player from '../audioplayer';

const QuestionContainer = ({isQuestionOpen, birdData}) => {
  return (
    <div className="col-12 mb-4 question-container">
      <div className="row">
        <div className="col-3">
          <BirdPicture
            isQuestionOpen={isQuestionOpen}
            birdData={birdData} />
        </div>
        <div className="col-9 d-flex">
          <div className="flex-fill list-group list-group-flush rounded">
            <div className="flex-fill list-group-item">
              <BirdName />
            </div>
            <div className="flex-fill list-group-item">
              <Player birdData={birdData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default QuestionContainer;

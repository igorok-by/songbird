import React from 'react';
import './question-container.scss';
import BirdPicture from '../bird-picture';
import BirdName from '../bird-name';
import Player from '../audioplayer';

const QuestionContainer = () => {
  return (
    <div className="col-12 mb-4 question-container">
      <div className="row">
        <div className="col-3">
          <BirdPicture />
        </div>
        <div className="col-9 d-flex">
          <div className="flex-fill list-group list-group-flush rounded">
            <div className="flex-fill list-group-item">
              <BirdName />
            </div>
            <div className="flex-fill list-group-item">
              <Player src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default QuestionContainer;

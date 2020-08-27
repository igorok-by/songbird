import React, {createRef} from 'react';
import './question-container.scss';
import BirdPicture from '../bird-picture';
import BirdName from '../bird-name';
import Player from '../audioplayer';

const QuestionContainer = ({isQuestionOpen, birdData}) => {
  // const controlPlayer = createRef();

  // if (!isQuestionOpen) Player.pause();
  // console.log(controlPlayer.current);
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
              <BirdName
                isQuestionOpen={isQuestionOpen}
                birdData={birdData} />
            </div>
            <div className="flex-fill list-group-item">
              <Player
                // controlPlayer={controlPlayer}
                isQuestionOpen={isQuestionOpen}
                birdData={birdData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default QuestionContainer;

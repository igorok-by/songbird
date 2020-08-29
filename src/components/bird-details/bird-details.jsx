import React from 'react';
import './bird-details.scss';
import birds from '../../data/birds';

import Instruction from '../instruction';
import BirdPicture from '../bird-picture';
import BirdName from '../bird-name';
import Player from '../audioplayer';
import BirdDescription from '../bird-description';

const BirdDetails = ({isAnswerEverClicked, birdData}) => {

  const classesInstruction = isAnswerEverClicked ? 'd-none' : 'col-12';
  const classesPicture = isAnswerEverClicked ? 'col-4 d-flex' : 'd-none';
  const classesName = isAnswerEverClicked ? 'col-8 d-flex' : 'd-none';
  const classesDescr = isAnswerEverClicked ? 'col-12' : 'd-none';
  
  return (
    <div className="col-8">
      <div className="row">
        <div className={classesInstruction}>
          <Instruction />
        </div>
        <div className={classesPicture}>
          <BirdPicture
            birdData={birdData} />
        </div>
        <div className={classesName}>
          <div className="flex-fill list-group list-group-flush rounded">
            <div className="flex-fill list-group-item">
              <BirdName
                birdData={birdData} />
            </div>
            <div className="flex-fill list-group-item">
              <Player
                birdData={birdData} />
            </div>
          </div>
        </div>
        <div className={classesDescr}>
          <BirdDescription
            birdData={birdData.description} />
        </div>
      </div>
    </div>
  )
};

export default BirdDetails;

import React from 'react';
import './bird-details.scss';
import birds from '../../data/birds';

import Instruction from '../instruction';
import BirdPicture from '../bird-picture';
import BirdName from '../bird-name';
import Player from '../audioplayer';
import BirdDescription from '../bird-description';

const BirdDetails = () => {
  return (
    <div className="col-6">
      <div className="row">
        <div className="col-12">
          <Instruction />
        </div>
        <div className="col-5 d-flex">
          <BirdPicture />
        </div>
        <div className="col-7 d-flex">
          <div className="flex-fill list-group list-group-flush rounded">
            <div className="flex-fill list-group-item">
              <BirdName />
            </div>
            <div className="flex-fill list-group-item">
              <Player src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3" />
            </div>
          </div>
        </div>
        <div className="col-12">
          <BirdDescription description={birds[0][0].description} />
        </div>
      </div>
    </div>
  )
};

export default BirdDetails;

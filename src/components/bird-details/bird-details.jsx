import React from 'react'

import Instruction from '../instruction'
import BirdPicture from '../bird-picture'
import BirdName from '../bird-name'
import Player from '../audioplayer'
import BirdDescription from '../bird-description'

const BirdDetails = ({ isAnswerEverClicked, birdData }) => {
  const classesInstruction = isAnswerEverClicked ? 'd-none' : 'col-12'
  const classesPicture = isAnswerEverClicked
    ? 'col-12 col-sm-4 mb-3 d-flex'
    : 'd-none'
  const classesName = isAnswerEverClicked
    ? 'col-12 col-sm-8 mb-3 d-flex'
    : 'd-none'
  const classesDescr = isAnswerEverClicked ? 'col-12' : 'd-none'

  return (
    <div className="col-12 col-md-8">
      <div className="row h-100">
        <div className={classesInstruction}>
          <Instruction />
        </div>
        <div className={classesPicture}>
          <BirdPicture birdData={birdData} />
        </div>
        <div className={classesName}>
          <div className="flex-fill list-group list-group-flush rounded">
            <div className="flex-fill list-group-item">
              <BirdName birdData={birdData} />
            </div>
            <div className="flex-fill list-group-item">
              <Player birdData={birdData} />
            </div>
          </div>
        </div>
        <div className={classesDescr}>
          <BirdDescription birdData={birdData.description} />
        </div>
      </div>
    </div>
  )
}

export default BirdDetails

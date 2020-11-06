import React, { memo } from 'react'

import Instruction from '../instruction'
import BirdPicture from '../bird-picture'
import BirdName from '../bird-name'
import Player from '../audioplayer'

import './bird-details.scss'

const BirdDetails = ({
  isAnswerEverClicked,
  birdData: { image, name, species, audio, description },
}) => {
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
          <div className="instruction">
            <p>Послушайте плеер.</p>
            <p>Выберите птицу из списка.</p>
          </div>
        </div>
        <div className={classesPicture}>
          <BirdPicture image={image} />
        </div>
        <div className={classesName}>
          <div className="flex-fill list-group list-group-flush rounded">
            <div className="flex-fill list-group-item">
              <BirdName birdName={name} birdSpecies={species} />
            </div>
            <div className="flex-fill list-group-item">
              <Player audioSrc={audio} />
            </div>
          </div>
        </div>
        <div className={classesDescr}>
          <p className="bird-description">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default memo(BirdDetails)

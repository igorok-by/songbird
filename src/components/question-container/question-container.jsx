import React from 'react'

import BirdPicture from '../bird-picture'
import BirdName from '../bird-name'
import Player from '../audioplayer'

const QuestionContainer = ({
  isQuestionOpen,
  birdData: { name, image, species, audio },
}) => {
  console.log('Ответ: ', name)
  return (
    <div className="col-12 mb-3 question-container">
      <div className="row">
        <div className="col-12 col-sm-4 col-lg-3 mb-3 mb-sm-0 align-items-center d-flex">
          <BirdPicture isQuestionOpen={isQuestionOpen} image={image} />
        </div>
        <div className="col-12 col-sm-8 col-lg-9 d-flex">
          <div className="flex-fill list-group list-group-flush rounded">
            <div className="flex-fill list-group-item">
              <BirdName
                isQuestionOpen={isQuestionOpen}
                birdName={name}
                birdSpecies={species}
              />
            </div>
            <div className="flex-fill list-group-item">
              <Player isQuestionOpen={isQuestionOpen} audioSrc={audio} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionContainer

import React from 'react'
import BirdsList from '../birds-list'
import BirdDetails from '../bird-details'

const AnswerContainer = ({
  isAnswerEverClicked,
  currNumberOfClickedBird,
  birdGroupData,
  handleAnswerClick,
}) => {
  return (
    <div className="col-12 mb-3 answer-container">
      <div className="row">
        <BirdsList
          birdGroupData={birdGroupData}
          handleAnswerClick={handleAnswerClick}
        />
        <BirdDetails
          isAnswerEverClicked={isAnswerEverClicked}
          birdData={birdGroupData[currNumberOfClickedBird]}
        />
      </div>
    </div>
  )
}

export default AnswerContainer

import React from 'react'

import BirdsListItem from '../birds-list-item'

const BirdsList = ({ birdGroupData, handleAnswerClick }) => {
  const birdItems = birdGroupData.map(({ id, name, answerStatus }) => (
    <BirdsListItem
      answerStatus={answerStatus}
      birdName={name}
      key={id}
      handleClick={handleAnswerClick}
    />
  ))

  return (
    <div className="col-12 col-md-4 mb-3 mb-md-0">
      <ul className="list-group w-100">{birdItems}</ul>
    </div>
  )
}

export default BirdsList

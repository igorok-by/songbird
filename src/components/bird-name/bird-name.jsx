import React, { memo } from 'react'
import './bird-name.scss'

const BirdName = ({ isQuestionOpen, birdData }) => (
  <h4 className="bird-name">
    {isQuestionOpen ? (
      '******'
    ) : (
      <>
        {birdData.name} <span>({birdData.species})</span>
      </>
    )}
  </h4>
)

export default memo(BirdName)

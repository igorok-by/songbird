import React, { memo } from 'react'
import './bird-name.scss'

const BirdName = ({ isQuestionOpen, birdName, birdSpecies }) => (
  <h4 className="bird-name">
    {isQuestionOpen ? (
      '******'
    ) : (
      <>
        {birdName} <span>({birdSpecies})</span>
      </>
    )}
  </h4>
)

export default memo(BirdName)

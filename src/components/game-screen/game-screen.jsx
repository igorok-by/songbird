import React from 'react'

import QuestionContainer from '../question-container'
import AnswerContainer from '../answer-container'
import ButtonNext from '../button-next'

const GameScreen = ({
  isQuestionOpen,
  isAnswerEverClicked,
  currNumberOfClickedBird,
  currNumberOfHiddenBird,
  birdGroupData,
  handleAnswerClick,
  handleNextClick,
}) => (
  <>
    <QuestionContainer
      isQuestionOpen={isQuestionOpen}
      birdData={birdGroupData[currNumberOfHiddenBird]}
    />

    <AnswerContainer
      isAnswerEverClicked={isAnswerEverClicked}
      currNumberOfClickedBird={currNumberOfClickedBird}
      birdGroupData={birdGroupData}
      handleAnswerClick={handleAnswerClick}
    />

    <ButtonNext
      isQuestionOpen={isQuestionOpen}
      handleNextClick={handleNextClick}
    />
  </>
)

export default GameScreen

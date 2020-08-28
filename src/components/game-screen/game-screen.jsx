import React  from 'react';

import GroupsList from '../groups-list';
import QuestionContainer from '../question-container';
import AnswerContainer from '../answer-container';
import ButtonNext from '../button-next';

const GameScreen = ({
  isGameFinished,
  isQuestionOpen,
  isAnswerEverClicked,
  currNumberOfClickedBird,
  currNumberOfHiddenBird,
  birdGroupData,
  handleAnswerClick,
  handleNextClick,
}) => {

  if (!isGameFinished) {
    return (
      <>
        <QuestionContainer 
          isQuestionOpen={isQuestionOpen}
          birdData={birdGroupData[currNumberOfHiddenBird]} />
          
        <AnswerContainer
          isAnswerEverClicked={isAnswerEverClicked}
          currNumberOfClickedBird={currNumberOfClickedBird}
          birdGroupData={birdGroupData}
          handleAnswerClick={handleAnswerClick} />
  
        <ButtonNext
          isQuestionOpen={isQuestionOpen}
          handleNextClick={handleNextClick} />
      </>
    );
  }
  
  return null;
};

export default GameScreen;

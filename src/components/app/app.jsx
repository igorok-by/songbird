import React, { useState, useEffect } from 'react';
import './app.scss';
import BIRD_GROUPS from '../../data/birdGroups';
import BIRDS_DATA from '../../data/birds';
import getRandomNumber from '../../utils/getRandomNumber';
import AUDIO_SRC from '../../data/audioSrc';

import Header from '../header';
import GroupsList from '../groups-list';
import QuestionContainer from '../question-container';
import AnswerContainer from '../answer-container';
import ButtonNext from '../button-next';

const setBirdGroups = (currNumber) =>
  BIRD_GROUPS.map((group, idx) => {
    let isActive = false;
    if (idx === currNumber) isActive = true;
    return {
      title: group,
      key: group,
      isActive,
    };
  }
);

const setBirdItems = (currNumber) =>
  BIRDS_DATA[currNumber].map((birdItem) => {
    return {
      ...birdItem,
      answerStatus: 'inactive',
    }
  }
);

const toggleActiveGroup = (groups, groupToBeActive) =>
  groups.map((group) => {
    const newGroup = group;
    newGroup.isActive = (newGroup.title === groupToBeActive);
    return newGroup;
  }
);

const App = () => {
  const [currNumberOfGroup, setCurrNumberOfGroup] = useState(0);
  const [groups, setActiveGroup] = useState(setBirdGroups(currNumberOfGroup));
  const [birdGroupData, setAnswersStatus] = useState(setBirdItems(currNumberOfGroup));

  const [currNumberOfHiddenBird, setNumbOfHiddenBird] = useState(getRandomNumber(0, birdGroupData.length - 1));
  const [currNumberOfClickedBird, setNumbOfClickedBird] = useState(0);
  const [generalScore, setGeneralScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(groups.length - 1);

  const [isQuestionLast, setQuestionLast] = useState(false);
  const [isQuestionOpen, setQuestionState] = useState(true);
  const [isAnswerEverClicked, setAnswerClicked] = useState(false);

  const handleFinish = () => {

  };

  const handleNextClick = () => {
    console.log(isQuestionOpen);
    setQuestionState(true);
    setAnswerClicked(false);
    setCurrNumberOfGroup(currNumberOfGroup + 1);
    setActiveGroup(toggleActiveGroup(groups, BIRD_GROUPS[currNumberOfGroup + 1]));
    setAnswersStatus(setBirdItems(currNumberOfGroup + 1));
    setNumbOfHiddenBird(getRandomNumber(0, birdGroupData.length - 1));
    if (currNumberOfGroup === (groups.length - 2)) {
      setQuestionLast(true);
    }
  };

  const handleAnswerClick = (birdName) => {
    const resultSound = new Audio();
    
    const newBirdGroupData = birdGroupData.map((birdItem) => {
      if (birdItem.name === birdName) {
        setNumbOfClickedBird(birdItem.id - 1);
        
        if (isQuestionOpen) {
          if (birdItem.name !== birdGroupData[currNumberOfHiddenBird].name) {
            resultSound.src = AUDIO_SRC.fail;
            birdItem.answerStatus = 'wrong';
            setCurrentScore(currentScore - 1);
            
          } else {
            setGeneralScore(generalScore + currentScore);
            resultSound.src = AUDIO_SRC.win;
            birdItem.answerStatus = 'right';
            setQuestionState(false);
          }
        }
      }
      return birdItem;
    });

    resultSound.play();
    setAnswersStatus(newBirdGroupData);
    if (!isAnswerEverClicked) setAnswerClicked(true);
    console.log('1', isQuestionOpen);
    if (isQuestionLast) handleFinish();
  };

  
  return (
    <div className="container">
      <div className="row">
        <Header
          score={generalScore} />

        <GroupsList
          birdGroups={groups} />

        <QuestionContainer 
          isQuestionOpen={isQuestionOpen}
          birdData={birdGroupData[currNumberOfHiddenBird]} />
          
        <AnswerContainer
          isAnswerEverClicked={isAnswerEverClicked}
          currNumberOfClickedBird={currNumberOfClickedBird}
          birdGroupData={birdGroupData}
          handleAnswerClick={handleAnswerClick} />

        <ButtonNext
          isQuestionLast={isQuestionLast}
          isQuestionOpen={isQuestionOpen}
          handleNextClick={handleNextClick} />
      </div>
    </div>
  );
};

export default App;

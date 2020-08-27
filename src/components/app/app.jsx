import React, { useState } from 'react';
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
  const [currNumberOfHiddenBird, setNumbOfHiddenBird] = useState(getRandomNumber(0, birdGroupData.length));
  const [currNumberOfClickedBird, setNumbOfClickedBird] = useState(0);
  const [isQuestionOpen, setQuestionState] = useState(true);
  const [isAnswerEverClicked, setAnswerClicked] = useState(false);

  const handleNextClick = () => {
    setQuestionState(true);
    setCurrNumberOfGroup(currNumberOfGroup + 1);
    setActiveGroup(toggleActiveGroup(groups, BIRD_GROUPS[currNumberOfGroup + 1]));
  };
  
  const handleRightAnswer = () => {
    setQuestionState(false);
  };

  const handleAnswerClick = (birdName) => {
    const resultSound = new Audio();

    const newBirdGroupData = birdGroupData.map((birdItem) => {
      if (birdItem.name === birdName) {
        setNumbOfClickedBird(birdItem.id - 1);

        if (birdItem.name !== birdGroupData[currNumberOfHiddenBird].name) {
          resultSound.src = AUDIO_SRC.fail;
          birdItem.answerStatus = 'wrong';

        } else {
          resultSound.src = AUDIO_SRC.win;
          birdItem.answerStatus = 'right';
          handleRightAnswer();
        }
      }
      return birdItem;
    });

    resultSound.play();
    if (!isAnswerEverClicked) setAnswerClicked(true);
    setAnswersStatus(newBirdGroupData);
  };
  
  return (
    <div className="container">
      <div className="row">
        <Header />

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
          isQuestionOpen={isQuestionOpen}
          handleNextClick={handleNextClick} />
      </div>
    </div>
  );
};

export default App;

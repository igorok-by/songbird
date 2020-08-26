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
  const [currNumberOfBird, setNumbOfBird] = useState(getRandomNumber(0, birdGroupData.length));
  const [isQuestionOpen, setQuestionState] = useState(true);
  
  const handleRightAnswer = () => {
    setCurrNumberOfGroup(currNumberOfGroup + 1);
    setActiveGroup(toggleActiveGroup(groups, BIRD_GROUPS[currNumberOfGroup + 1]));
  };

  const handleAnswerClick = (birdName) => {
    const resultSound = new Audio();
    const newBirdGroupData = birdGroupData.map((birdItem) => {
      if (birdItem.name === birdName) {

        if (birdItem.name !== birdGroupData[currNumberOfBird].name) {
          resultSound.src = AUDIO_SRC.fail;
          birdItem.answerStatus = 'wrong';

        } else {
          resultSound.src = AUDIO_SRC.win;
          birdItem.answerStatus = 'right';
        }
      }
      return birdItem;
    });

    resultSound.play();
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
          birdData={birdGroupData[currNumberOfBird]} />
        <AnswerContainer
          currNumberOfBird={currNumberOfBird}
          birdGroupData={birdGroupData}
          handleAnswerClick={handleAnswerClick} />
        <ButtonNext
          change={handleRightAnswer} />
      </div>
    </div>
  );
};

export default App;

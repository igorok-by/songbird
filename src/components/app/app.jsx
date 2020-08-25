import React, { useState } from 'react';
import './app.scss';
import BIRD_GROUPS from '../../data/birdGroups';
import BIRDS_DATA from '../../data/birds';
// import Dummy from '../../assets/img/dummy.jpg';

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
  
  const handleRightAnswer = () => {
    setCurrNumberOfGroup(currNumberOfGroup + 1);
    setActiveGroup(toggleActiveGroup(groups, BIRD_GROUPS[currNumberOfGroup + 1]));
  };

  const handleAnswerClick = (birdName) => {
    console.log(birdName)
  };
  
  return (
    <div className="container">
      <div className="row">
        <Header />
        <GroupsList birdGroups={groups} />
        <QuestionContainer />
        <AnswerContainer
          birdGroupData={birdGroupData}
          handleAnswerClick={handleAnswerClick} />
        <ButtonNext change={handleRightAnswer} />
      </div>
    </div>
  );
};

export default App;
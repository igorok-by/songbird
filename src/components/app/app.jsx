import React, { useState } from 'react';
import './app.scss';
import BIRD_GROUPS from '../../data/birdGroups';
// import Dummy from '../../assets/img/dummy.jpg';

import Header from '../header';
import GroupsList from '../groups-list';
import QuestionContainer from '../question-container';
import AnswerContainer from '../answer-container';
import ButtonNext from '../button-next';

const birdGroups = (currNumber) =>
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

const toggleActiveGroup = (groups, groupToBeActive) =>
  groups.map((group) => {
    group.isActive = (group.title === groupToBeActive);
    return group;
  }
);

const App = () => {
  const [currNumberOfGroup, setCurrNumberOfGroup] = useState(0);
  const [groups, setActiveGroup] = useState(birdGroups(currNumberOfGroup));
  const handleRightAnswer = () => {
    setCurrNumberOfGroup(currNumberOfGroup + 1);
    setActiveGroup(toggleActiveGroup(groups, BIRD_GROUPS[currNumberOfGroup]));
  };
  
  return (
    <div className="container">
      <div className="row">
        <Header />
        <GroupsList birdGroups={groups} />
        <QuestionContainer />
        <AnswerContainer />
        <ButtonNext change={handleRightAnswer} />
      </div>
    </div>
  );
};

export default App;
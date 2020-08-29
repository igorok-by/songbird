import React from 'react';
import './birds-list.scss';

import BirdsListItem from '../birds-list-item';

const BirdsList = ({birdGroupData, handleAnswerClick}) => {

  const birdItems = birdGroupData.map(({id, name, answerStatus}) => 
    <BirdsListItem
      answerStatus={answerStatus}
      birdName={name}
      key={id}
      handleClick={handleAnswerClick} />
  );

  return (
    <div className="col-4">
      <ul className="list-group w-100">
        {birdItems}
      </ul>
    </div>
  )
};

export default BirdsList;

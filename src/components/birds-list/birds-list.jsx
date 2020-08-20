import React from 'react';
import './birds-list.scss';

import BirdsListItem from '../birds-list-item'

const BirdsList = () => {
  return (
    <div className="col-6">
      <ul className="list-group w-100">
        <BirdsListItem birdName="Ворон" />
        <BirdsListItem birdName="Сорока" />
      </ul>
    </div>
  )
};

export default BirdsList;

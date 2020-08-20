import React  from 'react';
import './birds-list-item.scss';

const BirdsListItem = ({birdName}) => {
  return (
    <li className="list-group-item birds-list-item">
      <span />
      {birdName}
    </li>
  )
};

export default BirdsListItem;

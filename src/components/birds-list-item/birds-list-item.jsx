import React  from 'react';
import './birds-list-item.scss';

const BirdsListItem = ({answerStatus, birdName, handleClick}) => {
  let classes = 'list-group-item';

  switch (answerStatus) {
    case 'wrong':
      classes += ' birds-list-item birds-list-item--wrong';
      break;
    case 'right':
      classes += ' birds-list-item birds-list-item--right';
      break;
    default:
      classes += ' birds-list-item';
  }

  return (
    <li
      className={classes}>
      <button
        type="button"
        onClick={() => handleClick(birdName)}>
        <span />
        {birdName}
      </button>
    </li>
  )
};

export default BirdsListItem;

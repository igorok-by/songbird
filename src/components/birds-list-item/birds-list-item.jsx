import React  from 'react';
import './birds-list-item.scss';

const BirdsListItem = ({answerStatus, birdName, handleClick}) => {
  let classes = 'list-group-item';

  switch (answerStatus) {
    case 'wrong':
      classes += ' wrong';
      break;
    case 'right':
      classes += ' right';
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

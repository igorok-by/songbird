import React from 'react';
import './button-next.scss';

const ButtonNext = ({isQuestionOpen, isQuestionLast, handleNextClick}) => {

  const classes = isQuestionLast ? 'd-none' : 'col-12'

  return (
    <div className={classes}>
      <button
        className="btn btn-block button-next"
        type="button"
        onClick={handleNextClick}
        disabled={isQuestionOpen}>
        Следующий уровень
      </button>
    </div>
  )
};

export default ButtonNext;

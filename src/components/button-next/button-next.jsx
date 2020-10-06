import React from 'react'
import './button-next.scss'

const ButtonNext = ({ isQuestionOpen, handleNextClick }) => {
  return (
    <div className="col-12">
      <button
        className="btn btn-block button-next"
        type="button"
        onClick={handleNextClick}
        disabled={isQuestionOpen}
      >
        Следующий уровень
      </button>
    </div>
  )
}

export default ButtonNext

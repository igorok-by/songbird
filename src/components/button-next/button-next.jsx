import React, { memo } from 'react'
import './button-next.scss'

const ButtonNext = ({ isQuestionOpen, handleNextClick }) => (
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

export default memo(ButtonNext)

import React, { memo } from 'react'
import classNames from 'classnames'

import './finish-screen.scss'
import birdHeroPic from '../../assets/img/bird-hero.png'

const FinishScreen = ({ generalScore, bestScore, handleRestartGame }) => {
  const classes = classNames(
    'col-12',
    'd-flex',
    'flex-column',
    'align-items-center',
    'justify-content-center',
    'finish-screen',
    { 'finish-screen--h-50': generalScore !== bestScore },
  )

  return (
    <div className={classes}>
      <h2>Поздравляем!</h2>
      <p>
        Вы прошли викторину и набрали <span>{generalScore}</span> из{' '}
        <span>{bestScore}</span> возможных баллов
      </p>

      {generalScore === bestScore ? (
        <img src={birdHeroPic} className="w-100 rounded" alt="Птичка" />
      ) : (
        <button
          className="btn btn-block w-75 button-next"
          type="button"
          onClick={handleRestartGame}
        >
          Попробовать еще раз!
        </button>
      )}
    </div>
  )
}

export default memo(FinishScreen)

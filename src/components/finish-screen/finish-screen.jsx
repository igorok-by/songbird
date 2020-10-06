import React from 'react'
import './finish-screen.scss'
import birdHeroPic from '../../assets/img/bird-hero.png'

const FinishScreen = ({
  isGameFinished,
  generalScore,
  bestScore,
  handleRestartGame,
}) => {
  let classes =
    'col-12 d-flex flex-column align-items-center justify-content-center finish-screen'

  if (isGameFinished) {
    let resultElem = (
      <img src={birdHeroPic} className="w-100 rounded" alt="Птичка" />
    )

    if (generalScore !== bestScore) {
      resultElem = (
        <button
          className="btn btn-block w-75 button-next"
          type="button"
          onClick={handleRestartGame}
        >
          Попробовать еще раз!
        </button>
      )
      classes += ' finish-screen--h-50'
    }

    return (
      <div className={classes}>
        <h2>Поздравляем!</h2>
        <p>
          Вы прошли викторину и набрали <span>{generalScore}</span> из{' '}
          <span>{bestScore}</span> возможных баллов
        </p>
        {resultElem}
      </div>
    )
  }

  return null
}

export default FinishScreen

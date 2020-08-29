import React  from 'react';
import dummyPic from '../../assets/img/dummy.png';

const FinishScreen = ({isGameFinished, generalScore, bestScore, handleRestartGame}) => {
  console.log(isGameFinished, generalScore);
  if (isGameFinished) {
    let resultElem = <img
              src={dummyPic}
              className="w-100 rounded bird-picture"
              alt="Птичка" />;

    if (generalScore !== bestScore) {
      resultElem = <button
              className="btn btn-block button-next"
              type="button"
              onClick={handleRestartGame}>
              Попробовать еще раз!
            </button>
    }

    return (
      <div className="col-12">
        <h1>Поздравляем!</h1>
        <p>Вы прошли викторину и набрали <span>{generalScore}</span> из <span>{bestScore}</span> возможных баллов</p>
        {resultElem}
      </div>
    );
  };

  return null;
};

export default FinishScreen;

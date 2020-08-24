import React from 'react';
import './button-next.scss';

const ButtonNext = ({change}) => {
  return (
    <div className="col-12">
      <button
        onClick={change}
        className="btn btn-block button-next"
        type="button">
        Следующий уровень
      </button>
    </div>
  )
};

export default ButtonNext;

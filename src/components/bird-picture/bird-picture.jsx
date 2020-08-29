import React from 'react';
import './bird-picture.scss';
import dummyPic from '../../assets/img/dummy.png';

const BirdPicture = ({isQuestionOpen, birdData}) => {
  let imgSrc = birdData.image;
  let classes = 'rounded bird-picture';
  
  if (isQuestionOpen) {
    imgSrc = dummyPic;
    classes += ' bird-picture--padded';
  };

  return (
    <div className={classes}>
      <img
        src={imgSrc}
        className="rounded bird-picture__img"
        alt="Птичка" />
    </div>
  )
};

export default BirdPicture;

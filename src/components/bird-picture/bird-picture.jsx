import React from 'react';
import './bird-picture.scss';
import dummyPic from '../../assets/img/dummy.jpg';

const BirdPicture = ({isQuestionOpen, birdData}) => {
  let imgSrc = birdData.image;
  
  if (isQuestionOpen) imgSrc = dummyPic;

  return (
    <img
      src={imgSrc}
      className="w-100 rounded bird-picture"
      alt="Птичка" />
  )
};

export default BirdPicture;

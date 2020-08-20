import React from 'react';
import './bird-picture.scss';
import dummyPic from '../../assets/img/dummy.jpg';

const BirdPicture = () => {
  return (
    <img
      src={dummyPic}
      className="w-100 rounded bird-picture"
      alt="bird" />
  )
};

export default BirdPicture;

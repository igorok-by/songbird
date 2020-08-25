import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './audioplayer.scss';

const Player = ({birdData}) => (
  <AudioPlayer
    // autoPlay
    src={birdData.audio}
    onPlay={() => console.log('onPlay')}
  />
);

export default Player;

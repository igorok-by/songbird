import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './audioplayer.scss';

const Player = ({src}) => (
  <AudioPlayer
    // autoPlay
    src={src}
    onPlay={() => console.log('onPlay')}
    // other props here
  />
);

export default Player;

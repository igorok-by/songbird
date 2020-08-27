import React, { useRef, useEffect } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './audioplayer.scss';
import { create } from 'lodash';

const Player = ({isQuestionOpen, birdData, controlPlayer}) => {
  const player = useRef();
  useEffect(() => {
    if (!isQuestionOpen) player.current.audio.current.pause();
    // console.log(player.current);
  });
    // console.log(player.current);
  // if (!isQuestionOpen) player.current.audio.current.pause();
  return (
    <AudioPlayer
      ref={player}
      src={birdData.audio}
      onPlay={() => console.log('onPlay')}
      showJumpControls={false}
      autoPlayAfterSrcChange={false}
      customControlsSection={[RHAP_UI.VOLUME_CONTROLS]}
      customProgressBarSection={[
        RHAP_UI.MAIN_CONTROLS,
        RHAP_UI.CURRENT_TIME,
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.DURATION
      ]}
    />
  )
};

export default Player;

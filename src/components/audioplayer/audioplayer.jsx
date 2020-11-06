import React, { useRef, useEffect } from 'react'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import IconPause from './IconPause'
import IconPlay from './IconPlay'

import 'react-h5-audio-player/src/styles.scss'
import './audioplayer.scss'

const {
  VOLUME_CONTROLS,
  MAIN_CONTROLS,
  CURRENT_TIME,
  PROGRESS_BAR,
  DURATION,
} = RHAP_UI

const Player = ({ isQuestionOpen, audioSrc }) => {
  const player = useRef()

  useEffect(() => {
    if (!isQuestionOpen) player.current.audio.current.pause()
  }, [isQuestionOpen])

  return (
    <AudioPlayer
      className="audioplayer"
      ref={player}
      src={audioSrc}
      onPlay={() => console.log('onPlay')}
      showDownloadProgress={false}
      showJumpControls={false}
      autoPlayAfterSrcChange={false}
      customControlsSection={[VOLUME_CONTROLS]}
      customProgressBarSection={[
        MAIN_CONTROLS,
        CURRENT_TIME,
        PROGRESS_BAR,
        DURATION,
      ]}
      customIcons={{
        play: IconPlay,
        pause: IconPause,
      }}
    />
  )
}

export default Player

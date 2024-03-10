import { useEffect, useState } from 'react'
import cx from 'classnames'
import { Mic, Video, PhoneOff, MicOff, VideoOff } from 'lucide-react'

import styles from '@/component/Bottom/index.module.css'

const Bottom = (props) => {
  const {
    muted,
    playing,
    toggleAudio,
    toggleVideo,
    leaveRoom,
    SpeechRecognition,
    startListening,
    setMute
  } = props

  const handelClick = () => {
    SpeechRecognition.stopListening()
    setMute(true);
  }

  return (
    <div className={styles.bottomMenu}>
      {muted ? (
        <button onClick={startListening}>
          <MicOff
            className={cx(styles.icon, styles.active)}
            size={55}
            onClick={toggleAudio}
          />
        </button>
      ) : (
        <button onClick={handelClick}>
          <Mic className={styles.icon} size={55} onClick={toggleAudio} />
        </button>
      )}
      {playing ? (
        <Video className={styles.icon} size={55} onClick={toggleVideo} />
      ) : (
        <VideoOff
          className={cx(styles.icon, styles.active)}
          size={55}
          onClick={toggleVideo}
        />
      )}
      <PhoneOff size={55} className={cx(styles.icon)} onClick={leaveRoom} />
    </div>
  )
}

export default Bottom

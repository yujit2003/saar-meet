import { useEffect, useState } from 'react'
import cx from 'classnames'
import { Mic, Video, PhoneOff, MicOff, VideoOff } from 'lucide-react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

import styles from '@/component/Bottom/index.module.css'

const Bottom = (props) => {
  const {
    muted,
    playing,
    toggleAudio,
    toggleVideo,
    leaveRoom,
    playerId,
    roomId,
  } = props

  const [transcripts, setTranscripts] = useState({})

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })

  const {
    transcript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()

  useEffect(() => {
    console.log(transcripts)

    // Update the transcripts state
    setTranscripts((prevTranscripts) => ({
      ...prevTranscripts,
      [roomId]: {
        ...prevTranscripts[roomId],
        [playerId]: transcript,
      },
    }))
  }, [transcript, playerId, roomId])

  if (!browserSupportsSpeechRecognition) {
    return null
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
        <button onClick={SpeechRecognition.stopListening}>
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

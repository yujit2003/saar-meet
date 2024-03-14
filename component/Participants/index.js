import React from 'react';
import styles from "@/component/Participants/index.module.css";
const Participants = ({ number }) => {
  return (
    <div className={styles.participantContainer} >
      <div className={styles.participantCount}>Participants: {number}
      </div>
    </div>
  );
};

export default Participants;
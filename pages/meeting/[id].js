// pages/meeting/[roomId].js

import { useRouter } from 'next/router';

const MeetingDetails = () => {
  const router = useRouter();
  const meeting = JSON.parse(router.query.data);
  console.log(meeting);

  return (
    <div>
      <h1>Meeting Details</h1>
      {meeting && (
        <div>
          {/* Render meeting details */}
          <p>Meeting ID: {meeting.roomId}</p>
          {/* <p>Meeting Date: {meeting.date}</p> */}
          <div>
            {/* Display all dialogues from transcripts */}
            <h2>Transcripts:</h2>
            <ul>
              {meeting.transcripts?.map((dialogue, index) => (
                <li key={index}>
                  {Object.keys(dialogue).map((speaker, index) => (
                    <div key={index}>
                      <strong>Speaker:</strong> {speaker}<br />
                      <strong>Dialogue:</strong> {dialogue[speaker]}
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetingDetails;

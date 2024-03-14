import { useRouter } from 'next/router';
import { useState } from 'react';

const MeetingDetails = () => {
  const router = useRouter();
  const meeting = JSON.parse(router.query.data);
  console.log(meeting);

  // State to manage visibility of transcripts
  const [showTranscripts, setShowTranscripts] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Meeting Details</h1>
      {meeting && (
        <div>
          <p className="text-lg text-gray-700 text-center">Meeting ID: {meeting.roomId}</p>
          <div className="mt-4">
            {/* Show/hide transcripts button */}
            <button
              onClick={() => setShowTranscripts(!showTranscripts)}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-80"
            >
              {showTranscripts ? 'Hide Transcripts' : 'Show Transcripts'}
            </button>
            {/* Show transcripts if button is clicked */}
            {showTranscripts && (
              <ul className="list-disc pl-6">
                {meeting.transcripts && meeting.transcripts.map((line, index) => (
                  <li key={index} className="text-lg mb-2 text-gray-700">{line}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetingDetails;

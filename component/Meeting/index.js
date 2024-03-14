import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

// Separate component for summary display
const SummaryDisplay = ({ summaryData, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md">
        <button onClick={onClose} className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700">&times;</button>
        <h2 className="text-lg font-semibold mb-4">Summary</h2>
        <div>{summaryData}</div>
      </div>
    </div>
  );
};

const Meeting = ({ meeting }) => {
  const [dataa, setDataa] = useState(null); // Change initial state to null
  const [showSummary, setShowSummary] = useState(false);

  const createSummary = () => {
    axios.post('/api/generateSummary', { roomId: meeting.transcripts })
      .then(response => {
        setDataa(response.data.output); // Update dataa state with response data
        setShowSummary(true); // Show summary display
      })
      .catch(error => {
        console.error('Error occurred:', error);
      });
  };

  const closeSummary = () => {
    setShowSummary(false); // Close summary display
    setDataa(null); // Reset dataa state
  };

  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-2">{meeting.roomId}</h2>

      <div className='flex flex-col justify-center items-center'>

        <Link
          href={{
            pathname: `/meeting/${meeting.roomId}`,
            query: {
              data: JSON.stringify(meeting)
            },
          }}
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mb-2">
            View Details
          </button>
        </Link>

        <button onClick={createSummary} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
          Generate Summary
        </button>

        {/* Render SummaryDisplay if showSummary is true */}
        {showSummary && (
          <SummaryDisplay summaryData={dataa} onClose={closeSummary} />
        )}

      </div>
    </div>
  );
};

export default Meeting;

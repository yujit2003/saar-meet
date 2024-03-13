// components/Meeting.js

import Link from 'next/link';

const Meeting = ({ meeting }) => {

  const showDetails = () => {
    console.log(meeting);
  }

  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-2">{meeting.roomId}</h2>

      <Link
        href={{
          pathname: `/meeting/${meeting.roomId}`,
          query: {
            data: JSON.stringify(meeting)
          },
        }}
      >
        View Details
      </Link>

      <button onClick={showDetails} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mt-5">
        View Details
      </button>
    </div>
  );
};

export default Meeting;

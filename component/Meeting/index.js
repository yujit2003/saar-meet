// components/Meeting.js

import Link from 'next/link';

const Meeting = ({ meeting }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-2">{meeting.roomId}</h2>
      {/* Preserve the comment here */}
      {/*
        Keep the comment if needed
      */}
      <Link href={`/meeting/${meeting.id}`}>
        View Details
      </Link>
    </div>
  );
};

export default Meeting;

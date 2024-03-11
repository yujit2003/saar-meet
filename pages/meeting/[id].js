// pages/meeting/[id].js

import { useRouter } from 'next/router';

const MeetingDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch meeting details using the ID
  // You can use similar logic as in MeetingHistory component to fetch meeting details
  
  return (
    <div>
      <h1>Meeting Details</h1>
      <p>Meeting ID: {id}</p>
      {/* Display other meeting details here */}
    </div>
  );
};

export default MeetingDetails;

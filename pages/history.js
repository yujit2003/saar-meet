import { useState, useEffect } from 'react';
import axios from 'axios';
import Meeting from "@/component/Meeting";

export default function MeetingHistory() {
    const [meetings, setMeetings] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setIsLoading(true);
        axios.get('/api/transcriptFetch')
            .then(response => {
                setMeetings(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching chats:', error);
                setIsLoading(false);
            });
    };

    return (
        <div className='bg-white h-screen text-black p-4 flex flex-col items-center'>
            <h1 className="text-3xl font-bold mb-4">Meeting History</h1>
            <button onClick={fetchData} disabled={isLoading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {isLoading ? 'Loading...' : 'Refresh'}
            </button>

            {/* {isLoading && <p>Loading...</p>} */}
            {!isLoading && meetings.length === 0 && <p className="mt-4">No meetings found.</p>}
            {!isLoading && meetings.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {meetings.map((meeting, index) => (
                        <Meeting key={index} meeting={meeting} />
                    ))}
                </div>
            )}
        </div>
    );
}

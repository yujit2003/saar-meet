import { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [chats, setChats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        setIsLoading(true);
        axios.get('/api/transcriptFetch')
            .then(response => {
                setChats(response.data); // Assuming the response.data is an array of chats
                setIsLoading(false);
                console.log(chats)
            })
            .catch(error => {
                console.error('Error fetching chats:', error);
                setIsLoading(false);
            });
    };

    return (
        <div className='bg-white h-[100%] text-black'>
            <h1>yujit is the best in the world</h1>
            <button onClick={fetchData} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Fetch Data'}
            </button>
            {/* {chats.length > 0 && (
                <div className="cards-container">
                    {chats.map((chat, index) => (
                        <div className="card" key={index}>
                            <h2>Room ID: {chat.roomId}</h2>
                            <div>
                                <h3>Transcripts:</h3>
                                {chat.transcripts && typeof chat.transcripts === 'object' && Object.entries(chat.transcripts).map(([userId, message], i) => (
                                    <p key={i}><strong>{userId}:</strong> {message}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )} */}
        </div>
    );
}

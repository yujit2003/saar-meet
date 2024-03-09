import { useState } from 'react';

export default function Home() {
    const [inputData, setInputData] = useState('');

    const handleSaveData = async () => {
        const response = await fetch('/api/saveData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: inputData }),
        });

        if (response.ok) {
            alert('Data saved successfully!');
            setInputData('');
        } else {
            alert('Something went wrong!');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
            />
            <button onClick={handleSaveData}>Save Data</button>
        </div>
    );
}
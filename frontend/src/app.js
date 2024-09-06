import React, { useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    const fetchMessage = async () => {
        // Use the environment variable REACT_APP_BACKEND_URL to interact with backend
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/message`);
        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <div>
            <h1>Welcome to the Frontend</h1>
            <button onClick={fetchMessage}>Get Message from Backend</button>
            <p>{message}</p>
        </div>
    );
}

export default App;

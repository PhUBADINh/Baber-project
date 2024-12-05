import { useEffect, useState } from 'react';
const apiUrl =import.meta.env.VITE_API_URL;

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch(`${apiUrl}/example/`)
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error:', error));
    }, []);

    return (<>

            <div className="App">
            <h1>React + Django</h1>
            <p>Message from Django API: {message}</p>
            <div className="min-h-screen bg-blue-500 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold">Hello, Tailwind CSS!</h1>
            </div>
        </div>
    </>
        

    );
}

export default App;

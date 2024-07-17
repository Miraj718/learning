import React, { useState, useEffect } from 'react';

const AsyncAwait = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/productname");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="AsyncAwait">
            <h1>4. AsyncAwait:-</h1>
            <h2>Data:-</h2>
            <ul>
                {data.map(item => (
                    <p key={item.id}>
                        <li>Name: {item.name}</li>
                        <li>Select: {item.select}</li>
                        <li>Text: {item.text}</li>
                        <li>Display: {item.display}</li>
                    </p>
                ))}
            </ul>
        </div>
    );
};

export default AsyncAwait;

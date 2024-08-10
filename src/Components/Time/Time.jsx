import React, { useEffect, useState } from 'react';
import './Time.css';  // Importing the custom CSS

const Time = () => {
    const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="digital-watch">
            {currTime}
        </div>
    );
};

export default Time;

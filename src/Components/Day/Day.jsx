import React from 'react';
import './Day.css';  // Importing the custom CSS

const Day = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currDay = daysOfWeek[new Date().getDay()];

    return (
        <div className="digital-day">
            {currDay}
        </div>
    );
}

export default Day;

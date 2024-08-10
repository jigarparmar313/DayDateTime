import React from 'react';
import './Date.css';  // Importing the custom CSS

const Dated = () => {
    const currDate = new Date().toLocaleDateString();

    return (
        <div className="digital-date">
            {currDate}
        </div>
    );
}

export default Dated;

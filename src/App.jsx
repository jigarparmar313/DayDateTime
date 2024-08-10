import React from 'react';
import Time from './Components/Time/Time';
import Dated from './Components/Date/Date';
import Day from './Components/Day/Day';
import './App.css';

const App = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center" style={{ height: "95vh" }}>
          <div className=" text-center">
            <Day />     {/* The digital day */}
            <Dated />   {/* The digital date */}
            <Time />    {/* The digital watch */}
          </div>
        </div>
      </div >
    </>
  );
}

export default App;

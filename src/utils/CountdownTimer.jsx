import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getRemainingTime() {
    const targetDate = new Date("2023-05-12T18:00:00Z");
    const currentDate = new Date();
    const remainingTime = targetDate.getTime() - currentDate.getTime();

    return remainingTime < 0 ? 0 : remainingTime;
  }

  const displayDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");
  const displayHours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
    .toString()
    .padStart(2, "0");
  const displayMinutes = Math.floor(
    (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
  )
    .toString()
    .padStart(2, "0");

  const timerIsVisible = remainingTime > 0;

  return (
    <div className="text-center">
      {timerIsVisible && (
        <div className="text-3xl font-inter font-bold">
          <span className="bg-gradient-to-r from-[#6C3BBB] to-cyan inline-block text-transparent bg-clip-text">{displayDays}</span>
          <span className="text-sm font-inter">DAYS </span>
          <span className="bg-gradient-to-r from-[#6C3BBB] to-cyan inline-block text-transparent bg-clip-text">{displayHours}</span>
          <span className="text-sm font-inter">HRS </span>
          <span className="bg-gradient-to-r from-[#6C3BBB] to-cyan inline-block text-transparent bg-clip-text">{displayMinutes}</span>
          <span className="text-sm font-inter">MINS</span>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;

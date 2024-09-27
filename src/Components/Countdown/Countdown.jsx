import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    // Function to get the next Saturday at 10 AM
    const getNextSaturday = () => {
      const now = new Date();
      const dayOfWeek = now.getDay();
      const saturday = new Date(now);
      
      // Calculate how many days until next Saturday (6 = Saturday)
      let daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
      
      // If it's already Saturday after 10 AM, move to the next Saturday
      if (dayOfWeek === 6 && now.getHours() >= 10) {
        daysUntilSaturday += 7;
      }
      
      saturday.setDate(now.getDate() + daysUntilSaturday);
      saturday.setHours(10, 0, 0, 0); // Set the time to 10:00 AM

      return saturday;
    };

    const targetTime = getNextSaturday(); // Get the next Saturday at 10 AM
    const countdownDuration = 48 * 60 * 60 * 1000; // 48 hours in milliseconds
    const endTime = new Date(targetTime.getTime() + countdownDuration); // End time is 48 hours from the next Saturday at 10 AM

    // Update the time remaining every second
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeLeft = endTime - now;

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        setTimeRemaining(0); // Countdown finished
      } else {
        setTimeRemaining(timeLeft);
      }
    }, 1000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  // Function to format the remaining time into hours, minutes, and seconds
  const formatTimeRemaining = (time) => {
    if (time === null) return 'Calculating...';
    if (time === 0) return 'Countdown finished';

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <h5 className='text-white'>Only 48 hours for this discount, subscribe and get the offer</h5>
      <p className='text-white fw-bold text-center shadow shadow-lg fs-1'>{formatTimeRemaining(timeRemaining)}</p>
    </div>
  );
};

export default Countdown;

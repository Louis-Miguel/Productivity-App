import React, { useState, useEffect } from 'react';

const PomodoroTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); 
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => setTimeLeft(25 * 60); 

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => (prevTimeLeft >= 1 ? prevTimeLeft - 1 : 0));
      }, 1000); 
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft]);


  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md">
      <h2 className="text-2xl font-medium mb-4">Pomodoro Timer</h2>
      <div className="text-5xl font-bold mb-6">
        {formatTime(timeLeft)}
      </div>
      <div className="flex gap-4">
        <button 
          className="bg-green-500 hover:bg-green-600 ..." 
          onClick={startTimer}
          disabled={isRunning} 
        >
          Start
        </button>
        <button 
          className="bg-yellow-500 hover:bg-yellow-600 ..."
          onClick={pauseTimer} 
          disabled={!isRunning} 
        >
          Pause
        </button>
        <button 
          className="bg-red-500 hover:bg-red-600 ..." 
          onClick={resetTimer} 
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;

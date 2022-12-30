import React, { useEffect, useState } from 'react';

import dayjs from 'dayjs';

const timeDefault = {
  minutes: '20',
  seconds: '00',
};

export const Timer = () => {
  const [time, setTime] = useState(timeDefault);
  const [timer, setTimer] = useState(false);

  let endDate = dayjs().add(19, 'minute');
  endDate = endDate.add(60, 'seconds');

  const calculateTimeLeft = () => {
    const now = dayjs();
    const seconds = endDate.diff(now, 'seconds') % 60;
    const minutes = endDate.diff(now, 'minutes') % 60;

    if (seconds <= 0 && minutes <= 0) {
      setTimer(!timer);
      setTime({ seconds: '00', minutes: '00' });
    } else {
      const numberWithZero = (number: number) => {
        const numberString = number.toString();
        if (numberString.length >= 2) return numberString;
        return '0'.repeat(2 - numberString.length) + numberString;
      };

      setTime({
        seconds: numberWithZero(seconds),
        minutes: numberWithZero(minutes),
      });
    }
  };
  const startTimer = () => {
    setTimer(!timer);
  };
  useEffect(() => {
    if (timer) {
      const intervalId = setInterval(() => {
        calculateTimeLeft();
      }, 1000);
      return () => clearInterval(intervalId);
    }
    return undefined;
  }, [timer]);

  return (
    <div className='text-center'>
      <span>{time.minutes}</span>:<span>{time.seconds}</span>
      <div>
        <button type='button' onClick={startTimer}>
          start
        </button>
      </div>
    </div>
  );
};

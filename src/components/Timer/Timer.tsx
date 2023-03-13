import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

type TimerProps = {
  timeDefault: number;
  skipHandler: () => void;
};
export const Timer = ({ timeDefault, skipHandler }: TimerProps) => {
  const [time, setTime] = useState(dayjs(timeDefault));

  useEffect(() => {
    const interval = setInterval(() => {
      if (time.diff(dayjs(0), 'millisecond') <= 0) {
        clearInterval(interval);
      } else {
        setTime(time.subtract(1, 'second'));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const minutes = time.format('mm');
  const seconds = time.format('ss');

  useEffect(() => {
    if (minutes === '00' && seconds === '00') {
      skipHandler();
      setTime(time);
    }
  }, [time]);
  return (
    <div className='text-center text-4xl '>
      {timeDefault && (
        <>
          {' '}
          <span>{minutes}</span>:<span>{seconds}</span>
        </>
      )}
    </div>
  );
};

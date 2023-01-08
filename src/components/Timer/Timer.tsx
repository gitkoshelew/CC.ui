import React, { useCallback, useEffect } from 'react';
import dayjs from 'dayjs';
import { TimerDefaultType } from '../../Mocs/TimerMock';

type PropsTimerType = {
  timeDefault: TimerDefaultType;
  setIsRunning: (isRunning: boolean) => void;
  isRunning: boolean;
  currentTime: TimerDefaultType;
  setCurrentTime: (time: TimerDefaultType) => void;
};

export const Timer = React.memo(
  ({
    timeDefault,
    setIsRunning,
    isRunning,
    currentTime,
    setCurrentTime,
  }: PropsTimerType) => {
    const minutesForEndDate = +timeDefault.minutes;
    const secondsForEndDate = +timeDefault.seconds;

    let endDate = dayjs().add(minutesForEndDate, 'minute');
    endDate = endDate.add(secondsForEndDate, 'seconds');

    const calculateTimeLeft = useCallback(() => {
      const now = dayjs();
      const seconds = endDate.diff(now, 'seconds') % 60;
      const minutes = endDate.diff(now, 'minutes') % 60;

      if (seconds <= 0 && minutes <= 0) {
        setIsRunning(!isRunning);
        setCurrentTime({ seconds: '00', minutes: '00' });
      } else {
        const numberWithZero = (number: number) => {
          const numberString = number.toString();
          if (numberString.length >= 2) return numberString;
          return '0'.repeat(2 - numberString.length) + numberString;
        };

        setCurrentTime({
          seconds: numberWithZero(seconds),
          minutes: numberWithZero(minutes),
        });
      }
    }, [endDate, isRunning]);

    useEffect(() => {
      if (isRunning) {
        const intervalId = setInterval(() => {
          calculateTimeLeft();
        }, 1000);
        calculateTimeLeft();

        return () => clearInterval(intervalId);
      }

      return undefined;
    }, [isRunning]);

    return (
      <div className='text-center text-4xl '>
        <span>{currentTime.minutes}</span>:<span>{currentTime.seconds}</span>
      </div>
    );
  }
);

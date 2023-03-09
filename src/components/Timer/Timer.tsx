import React, { useCallback, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { TimerDefaultType } from '../../Mocs/TimerMock';
import { numberWithZero } from '../../utils/time';

type TimerProps = {
  timeDefault: number;
  // toggleIsRunning: () => void;
  // isRunning: boolean;
  // currentTime: TimerDefaultType;
  // setCurrentTime: (time: TimerDefaultType) => void;
};

export const Timer = React.memo(
  ({
    timeDefault,
  }: // toggleIsRunning,
  // isRunning,
  // currentTime,
  // setCurrentTime,
  TimerProps) => {
    const convertTime = (time: number) => {
      const duration = dayjs(time);
      const minutes = duration.minute();
      const seconds = duration.second();
      return {
        seconds: numberWithZero(seconds),
        minutes: numberWithZero(minutes),
      };
    };
    const [currentTime, setCurrentTime] = useState(timeDefault);
    const [isRunning, setIsRunning] = useState(false);

    const time = convertTime(currentTime);
    const [value, setValue] = useState(time);

    const minutesForEndDate = +value.minutes;
    const secondsForEndDate = +value.seconds;

    let endDate = dayjs().add(minutesForEndDate, 'minute');
    endDate = endDate.add(secondsForEndDate, 'seconds');

    const handleStart = useCallback(() => {
      setIsRunning(true);
    }, []);

    const calculateTimeLeft = useCallback(() => {
      const now = dayjs();
      const seconds = endDate.diff(now, 'seconds') % 60;
      const minutes = endDate.diff(now, 'minutes') % 60;

      if (seconds <= 0 && minutes <= 0) {
        setIsRunning(false);
        setValue({ seconds: '00', minutes: '00' });
      } else {
        setValue({
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
        return () => clearInterval(intervalId);
      }
      return undefined;
    }, [isRunning]);

    useEffect(() => {
      handleStart();
      setCurrentTime(currentTime);
      setValue(time);
    }, [timeDefault]);
    return (
      <div className='text-center text-4xl '>
        <span>{value.minutes}</span>:<span>{value.seconds}</span>
      </div>
    );
  }
);

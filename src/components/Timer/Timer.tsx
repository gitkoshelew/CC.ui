import React, { FC, useCallback, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { TimerDefaultType } from '../../Mocs/TimerMock';

type PropsTimerType = {
  timeDefault: TimerDefaultType;
};

export const Timer: FC<PropsTimerType> = ({ timeDefault }) => {
  const [time, setTime] = useState(timeDefault);
  const [timer, setTimer] = useState(false);
  const [disabledButton, setDisableButton] = useState(false);

  const minutesForEndDate = +timeDefault.minutes;
  const secondsForEndDate = +timeDefault.seconds;

  let endDate = dayjs().add(minutesForEndDate, 'minute');
  endDate = endDate.add(secondsForEndDate, 'seconds');

  const calculateTimeLeft = useCallback(() => {
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
  }, [endDate, timer]);
  const startTimer = () => {
    setTimer(!timer);
    setDisableButton(true);
  };
  useEffect(() => {
    if (timer) {
      const intervalId = setInterval(() => {
        calculateTimeLeft();
      }, 1000);
      calculateTimeLeft();

      return () => clearInterval(intervalId);
    }

    return undefined;
  }, [timer, calculateTimeLeft]);

  return (
    <div className='text-center text-4xl '>
      <span>{time.minutes}</span>:<span>{time.seconds}</span>
      <div>
        <button type='button' onClick={startTimer} disabled={disabledButton}>
          start
        </button>
      </div>
    </div>
  );
};

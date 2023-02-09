import React, { useCallback, useEffect } from 'react';
import dayjs from 'dayjs';
import { TimerDefaultType } from '../../Mocs/TimerMock';
import { numberWithZero } from '../../utils/time';

// Rule of thumb
// For type Props just use either "type Props" or "<Component Name>Props"
// Not PropsTimerType, but TimerProps

type TimerProps = {
  timeDefault: TimerDefaultType;
  toggleIsRunning: () => void;
  isRunning: boolean;
  currentTime: TimerDefaultType;
  setCurrentTime: (time: TimerDefaultType) => void;
};

export const Timer = React.memo(
  ({
    timeDefault,
    toggleIsRunning,
    isRunning,
    currentTime,
    setCurrentTime,
  }: TimerProps) => {
    const minutesForEndDate = +timeDefault.minutes;
    const secondsForEndDate = +timeDefault.seconds;

    let endDate = dayjs().add(minutesForEndDate, 'minute');
    endDate = endDate.add(secondsForEndDate, 'seconds');

    const calculateTimeLeft = useCallback(() => {
      const now = dayjs();
      const seconds = endDate.diff(now, 'seconds') % 60;
      const minutes = endDate.diff(now, 'minutes') % 60;

      if (seconds <= 0 && minutes <= 0) {
        // <Remark>
        // If new state depends on previous state,
        // then use following style

        // Right:
        // setIsRunning((prevIsRunning: boolean) => !prevIsRunning);
        // Wrong:
        // setIsRunning(!isRunning);

        // this approach is much better, as Timer component knows only the abstraction
        // It does not have access to the state directly, thus, error scope is narrower now
        // Also it is easier to understand, more clean
        toggleIsRunning();
        setCurrentTime({ seconds: '00', minutes: '00' });
      } else {
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

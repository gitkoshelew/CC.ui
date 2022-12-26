import dayjs from 'dayjs';
import * as Duration from 'dayjs/plugin/duration';
import { useEffect, useState } from 'react';

export const Timer = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const currentTime = dayjs();
  }, []);

  return <div>{time}</div>;
};

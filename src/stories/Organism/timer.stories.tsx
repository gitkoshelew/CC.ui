import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Timer } from '../../components/Timer/Timer';
import { timeDefault } from '../../Mocs/TimerMock';

export default {
  title: 'Organism/Timer',
  component: Timer,
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => {
  const [currentTime, setCurrentTime] = useState(timeDefault);
  const [isRunning, setIsRunning] = useState(false);

  const nextQuestionHandler = () => {
    setIsRunning(true);
    setCurrentTime(timeDefault);
    alert(`${currentTime.minutes}:${currentTime.seconds}`);
  };

  const stopTimerHandler = () => {
    setIsRunning(false);
    alert(`${currentTime.minutes}:${currentTime.seconds}`);
  };

  const toggleIsRunning = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  return (
    <div className='flex items-center flex-col gap-2'>
      <Timer
        {...args}
        isRunning={isRunning}
        toggleIsRunning={toggleIsRunning}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
      <Stack spacing={1} direction='row'>
        <Button onClick={nextQuestionHandler}>Start</Button>
        <Button onClick={stopTimerHandler}>End</Button>
      </Stack>
    </div>
  );
};

export const TimeWithMinutes = Template.bind({});

TimeWithMinutes.args = {
  timeDefault: { minutes: '20', seconds: '00' },
};

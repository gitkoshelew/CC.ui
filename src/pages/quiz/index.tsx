import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useCallback, useState } from 'react';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { Layout } from '../../components/layout/Layout';
import { tabsData } from '../../Mocs/RectangleProgressBarMoc';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { Timer } from '../../components/Timer/Timer';
import { timeDefault } from '../../Mocs/TimerMock';
import TestQuestions from './TestQuestions';
import { testQuestions } from '../../Mocs/QuizMock';
import { RectangleProgressTabs } from '../../components/common/Tabs/RectangleProgressTabs/RectangleProgressTabs';

const Quiz = () => {
  const [currentTime, setCurrentTime] = useState(timeDefault);
  const [isRunning, setIsRunning] = useState(false);

  const nextQuestionHandler = useCallback(() => {
    setIsRunning(true);
    setCurrentTime(timeDefault);
    alert(`${currentTime.minutes}:${currentTime.seconds}`);
  }, [currentTime]);

  return (
    <Layout>
      <ButtonBackHome />
      <Stack spacing={2} direction='column'>
        <Stack
          spacing={4}
          direction='column'
          sx={{ width: 1, maxWidth: '850px', mx: 'auto' }}
        >
          <Timer
            timeDefault={timeDefault}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
          />
          <RectangleProgressTabs
            activeTabId='1'
            tabsData={tabsData}
            isTabsStatusHidden
          />
        </Stack>
        <StylizedPaper title='”Node.js” question'>
          <span className='mx-auto text-base mb-2.5 font-semibold text-xl text-center'>
            What is the correct JavaScript syntax to change the content of the
            HTML element below?
          </span>
          <TestQuestions testQuestions={testQuestions} />
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={4}
          >
            <Button color='info'>Skip</Button>
            <Button onClick={nextQuestionHandler}>Next</Button>
          </Stack>
        </StylizedPaper>
      </Stack>
    </Layout>
  );
};

export default Quiz;

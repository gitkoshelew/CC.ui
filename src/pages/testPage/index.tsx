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
import { RectangleProgressTabs } from '../../components/common/Tabs/RectangleProgressTabs/RectangleProgressTabs';
import { wrapper } from '../../store/store';
import { getQuestions } from '../../store/reducers/questions-reducer';
import { TestQuestionsType } from '../../Types/TestQuestionsType';

export default function TestPage({
  questions,
  isEmptyQuestions,
}: {
  questions: TestQuestionsType[];
  isEmptyQuestions: boolean;
}) {
  const [currentTime, setCurrentTime] = useState(timeDefault);
  const [isRunning, setIsRunning] = useState(false);
  const [numberOfQuestion, setQuestion] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const nextQuestionHandler = useCallback(() => {
    if (numberOfQuestion === questions.length - 1) {
      alert('The end');
      setDisabled(true);
      return;
    }
    setQuestion(numberOfQuestion + 1);
  }, [numberOfQuestion, questions.length]);

  return (
    <Layout>
      <ButtonBackHome />
      {isEmptyQuestions ? (
        <div className='text-center'>There are not any questions</div>
      ) : (
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
              {questions[numberOfQuestion].description}
            </span>
            <TestQuestions
              answers={questions[numberOfQuestion].content.options}
            />
            <Stack
              direction='row'
              justifyContent='center'
              alignItems='center'
              spacing={4}
            >
              <Button color='info'>Skip</Button>
              <Button disabled={disabled} onClick={nextQuestionHandler}>
                Next
              </Button>
            </Stack>
          </StylizedPaper>
        </Stack>
      )}
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(getQuestions());
    const { questions } = store.getState().questions;
    const { isEmptyQuestions } = store.getState().questions;

    return {
      props: {
        questions,
        isEmptyQuestions,
      },
    };
  }
);

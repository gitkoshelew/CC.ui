import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useCallback, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { Layout } from '../../components/layout/Layout';
import { tabsData } from '../../Mocs/RectangleProgressBarMoc';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { Timer } from '../../components/Timer/Timer';
import { timeDefault } from '../../Mocs/TimerMock';
import { RectangleProgressTabs } from '../../components/common/Tabs/RectangleProgressTabs/RectangleProgressTabs';
import { wrapper } from '../../store/store';
import { getQuestions } from '../../store/reducers/questions-reducer';
import { TestQuestionsType } from '../../types/TestQuestionsType';
import { TestQuestions } from './TestQuestions';

export default function TestPage({
  questions,
  isEmptyQuestions,
}: {
  questions: TestQuestionsType[];
  isEmptyQuestions: boolean;
}) {
  const [currentTime, setCurrentTime] = useState(timeDefault);
  const [isRunning, setIsRunning] = useState(false);
  const { t } = useTranslation('testPage');

  // <Remark>
  // "NumberOfQuestion" is not suitable name here. It confuses with the amount of questions
  // Should be "questionNumber" and "setQuestionNumber"
  // const [numberOfQuestion, setQuestion] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [disabled, setDisabled] = useState(false);

  // use
  const numberOfQuestions = questions.length;

  const nextQuestionHandler = useCallback(() => {
    if (questionNumber === numberOfQuestions - 1) {
      alert('The end');
      setDisabled(true);
      return;
    }

    setQuestionNumber(questionNumber + 1);
  }, [questionNumber, numberOfQuestions]);

  const toggleIsRunning = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

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
            {/* <Remark> */}
            {/* Never pass the function for state mutation directly */}
            {/* Wrap it into another function for abstraction */}
            <Timer
              timeDefault={timeDefault}
              isRunning={isRunning}
              toggleIsRunning={toggleIsRunning}
              currentTime={currentTime}
              setCurrentTime={setCurrentTime}
            />
            <RectangleProgressTabs
              initialActiveTabId='1'
              tabsData={tabsData}
              isTabsStatusHidden
            />
          </Stack>
          <StylizedPaper title='”Node.js” question'>
            <span className='mx-auto text-base mb-2.5 font-semibold text-xl text-center'>
              {questions[questionNumber].description}
            </span>
            <TestQuestions
              answers={questions[questionNumber].content.options}
            />
            <Stack
              direction='row'
              justifyContent='center'
              alignItems='center'
              spacing={4}
            >
              <Button color='info'>{t('skip')}</Button>
              <Button disabled={disabled} onClick={nextQuestionHandler}>
                {t('next')}
              </Button>
            </Stack>
          </StylizedPaper>
        </Stack>
      )}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ locale }) => {
    await store.dispatch(getQuestions());
    const { questions } = store.getState().questions;
    const { isEmptyQuestions } = store.getState().questions;

    return {
      props: {
        questions,
        isEmptyQuestions,
        ...(await serverSideTranslations(locale as string, [
          'home',
          'testPage',
        ])),
      },
    };
  });

import { useCallback, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useAppDispatch, useAppSelector, wrapper } from '../store/store';
import { timeDefault } from '../Mocs/TimerMock';
import { Layout } from '../components/layout/Layout';
import { RectangleProgressTabs } from '../components/common/Tabs/RectangleProgressTabs/RectangleProgressTabs';
import { StylizedPaper } from '../components/common/StylizedPaper/StylizedPaper';
import { ButtonBackHome } from '../components/common/ButtonBackHome';
import { getOneQuizesTC } from '../store/reducers/quizes-reducer';
import { tabsData } from '../Mocs/RectangleProgressBarMoc';
import { Timer } from '../components/Timer/Timer';
import { TestQuestions } from './testPage/TestQuestions';
import { getQuestions } from '../store/reducers/questions-reducer';

const Id = ({ isEmptyQuestions }: { isEmptyQuestions: boolean }) => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const [currentTime, setCurrentTime] = useState(timeDefault);
  const [isRunning, setIsRunning] = useState(false);
  const { t } = useTranslation('testPage');
  const [numberOfQuestion, setQuestion] = useState(0);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(getOneQuizesTC(+id));
    }
  }, [id]);
  const cardWithQuestion = useAppSelector((state) => state.quizes.oneQuizes);

  const nextQuestionHandler = useCallback(() => {
    if (
      numberOfQuestion ===
      (cardWithQuestion?.question &&
        cardWithQuestion.question[numberOfQuestion].content.options.length - 1)
    ) {
      alert('The end');
      // setDisabled(true);
      return;
    }
    // setDisabled(false);
    setQuestion(numberOfQuestion + 1);
  }, [
    numberOfQuestion,
    // cardWithQuestion.length
  ]);
  const skipHandler = () => {
    if (numberOfQuestion === 0) {
      alert('The end');
      // setDisabled(true);
      return;
    }
    setQuestion(numberOfQuestion - 1);
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
          <StylizedPaper title={cardWithQuestion.title}>
            <span className='mx-auto text-base mb-2.5 font-semibold text-xl text-center'>
              {cardWithQuestion?.question &&
                cardWithQuestion?.question[numberOfQuestion]?.description}
            </span>
            {cardWithQuestion?.question && (
              <TestQuestions
                answers={
                  cardWithQuestion?.question[numberOfQuestion]?.content?.options
                }
              />
            )}
            <Stack
              direction='row'
              justifyContent='center'
              alignItems='center'
              spacing={4}
            >
              <Button color='info' onClick={skipHandler}>
                {t('skip')}
              </Button>
              <Button disabled={disabled} onClick={nextQuestionHandler}>
                {t('next')}
              </Button>
            </Stack>
          </StylizedPaper>
        </Stack>
      )}
    </Layout>
  );
};
export default Id;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ locale }) => {
    await store.dispatch(getQuestions());
    const { questions } = store.getState().questions;
    return {
      props: {
        questions,
        ...(await serverSideTranslations(locale as string, [
          'home',
          'testPage',
        ])),
      },
    };
  });

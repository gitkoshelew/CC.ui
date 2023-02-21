import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { Timer } from '../../components/Timer/Timer';
import { timeDefault } from '../../Mocs/TimerMock';
import { RectangleProgressTabs } from '../../components/common/Tabs/RectangleProgressTabs/RectangleProgressTabs';
import { tabsData } from '../../Mocs/RectangleProgressBarMoc';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { TestQuestionsType } from '../../Types/TestQuestionsType';
import { Layout } from '../../components/layout/Layout';
import { getOneCardTC } from '../../store/reducers/questions-reducer';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { TestQuestions } from './TestQuestions';
import { getOneQuizesTC } from '../../store/reducers/quizes-reducer';

const Id = ({
  questions,
  isEmptyQuestions,
}: // quizes,
{
  questions: TestQuestionsType[];
  isEmptyQuestions: boolean;
  // quizes: CardsType[];
}) => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();

  const [currentTime, setCurrentTime] = useState(timeDefault);
  const [isRunning, setIsRunning] = useState(false);
  const { t } = useTranslation('testPage');
  const [numberOfQuestion, setQuestion] = useState(0);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // (async () => {
    //   await dispatch(getOneQuizesTC(+id));
    // })();
    if (id) {
      dispatch(getOneQuizesTC(+id));
    }
  }, [id]);
  const cardWithQuestion = useAppSelector((state) => state.quizes.oneQuizes);
  console.log(cardWithQuestion, 'card');
  console.log('questions', cardWithQuestion.question);
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
              {/* {cardWithQuestion.question.map((m) => m.title)} */}
            </span>
            {/* <TestQuestions answers={cardWithQuestion.content.options} /> */}
            <Stack
              direction='row'
              justifyContent='center'
              alignItems='center'
              spacing={4}
            >
              <Button color='info'>{t('skip')}</Button>
              <Button
                disabled={disabled}
                // onClick={nextQuestionHandler}
              >
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

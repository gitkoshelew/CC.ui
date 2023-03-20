import { useEffect, useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useAppDispatch, useAppSelector, wrapper } from '../../store/store';
import { Layout } from '../../components/layout/Layout';
import { RectangleProgressTabs } from '../../components/common/Tabs/RectangleProgressTabs/RectangleProgressTabs';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { getOneQuizes } from '../../store/reducers/quizzes-reducer';
import { TestQuestions } from './TestQuestions';
import { setStateResult } from '../../store/reducers/result-reducer';
import { progressResult } from '../../utils/progressResult';
import { selectOneQuizes, selectResulData } from '../../store/selectors';
import { getCheckedAnswers } from '../../utils/getCheckedAnswers';
import { Timer } from '../../components/Timer/Timer';
import { IDataOptions, ResultType } from '../../types/TestQuestionsType';
import { TabsDataType } from '../../types/types';

const Id = () => {
  const router = useRouter();
  const { push } = router;
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const [valueRadio, setValueRadio] = useState('');
  const { t } = useTranslation('testPage');
  const [numberOfQuestion, setQuestion] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const cardWithQuestion = useAppSelector(selectOneQuizes);
  const resultData = useAppSelector(selectResulData);
  const [singleAnswer, setSingleAnswer] = useState<string[]>([]);

  const currentTest = cardWithQuestion?.question?.filter(
    (e, index) => index === numberOfQuestion
  );

  const correctAnswer = currentTest && currentTest[0]?.content?.correctAnswer;

  const type = currentTest && currentTest[0]?.type;

  const answers = currentTest && currentTest[0]?.content.options;

  const dataOptions: IDataOptions[] = useMemo(
    () =>
      answers &&
      [...answers]?.map((e, i) => ({
        label: e,
        value: i,
        isChecked: false,
      })),
    [answers]
  );

  const [stateCheck, setStateCheck] = useState<IDataOptions[]>(dataOptions);

  const handlerPressCheck = (
    label: string,
    value: number,
    isChecked: boolean
  ) => {
    setStateCheck([
      ...stateCheck.map((item) =>
        item.value === value ? { ...item, isChecked } : item
      ),
    ]);
  };

  const checkedAnswer = getCheckedAnswers(stateCheck);

  const onPressRadioHandler = (label: string) => {
    setSingleAnswer([label]);
    setValueRadio(label);
  };

  const answer =
    currentTest && currentTest[0]?.type === 'single'
      ? singleAnswer
      : checkedAnswer;

  const setNextResult = (
    questionStatus: ResultType['questionStatus'] = 'default'
  ) => {
    dispatch(
      setStateResult({
        id: numberOfQuestion,
        questionStatus,
        answer:
          currentTest[0].type === 'single'
            ? singleAnswer.join()
            : checkedAnswer.join(),
      })
    );
  };
  const setSkipResult = () => {
    dispatch(
      setStateResult({
        id: numberOfQuestion,
        questionStatus: 'default',
        answer:
          currentTest[0].type === 'single'
            ? singleAnswer.join()
            : checkedAnswer.join(),
      })
    );
  };
  const progressData: TabsDataType[] = useMemo(
    () =>
      [...Array(cardWithQuestion?.question?.length)].map((_, index) => ({
        id: index + 1,
        color: 'default',
      })),
    [cardWithQuestion?.question]
  );
  const data: TabsDataType[] = progressData.map((e) =>
    numberOfQuestion + 1 >= e.id
      ? {
          id: e.id,
          color: 'active',
        }
      : {
          id: e.id,
          color: '',
        }
  );
  const timeDefault = currentTest && currentTest[0]?.timer;
  const [timeForTimer, setTimeForTimer] = useState({ time: timeDefault });

  const nextQuestionHandler = () => {
    if (
      numberOfQuestion + 1 === cardWithQuestion.question.length &&
      resultData.length < cardWithQuestion.question.length
    ) {
      setNextResult(progressResult({ type, answer, correctAnswer }));
      setSingleAnswer([]);
      push('/result-page');
      return;
    }
    if (
      numberOfQuestion < cardWithQuestion.question.length &&
      resultData.length < cardWithQuestion.question.length
    ) {
      setNextResult(progressResult({ type, answer, correctAnswer }));
      setQuestion(numberOfQuestion + 1);
      setSingleAnswer([]);
      setValueRadio('');
    }
  };

  const skipHandler = () => {
    if (
      numberOfQuestion + 1 === cardWithQuestion?.question?.length &&
      resultData.length < cardWithQuestion?.question?.length
    ) {
      setSkipResult();
      setSingleAnswer([]);
      push('/result-page');
      return;
    }
    if (
      numberOfQuestion < cardWithQuestion?.question?.length &&
      resultData.length < cardWithQuestion?.question?.length
    ) {
      setSkipResult();
      setQuestion(numberOfQuestion + 1);
      setSingleAnswer([]);
      setValueRadio('');
    }
  };

  useEffect(() => {
    setStateCheck(dataOptions);
  }, [dataOptions, dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(getOneQuizes(+id));
    }
  }, [id]);

  useEffect(() => {
    if (
      cardWithQuestion?.question &&
      cardWithQuestion?.question[numberOfQuestion]?.id
    ) {
      setTimeForTimer((prevState) => ({ ...prevState, time: timeDefault }));
    }
  }, [cardWithQuestion.question, numberOfQuestion]);

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
            // key={timeDefault}
            timeDefault={timeForTimer}
            skipHandler={skipHandler}
          />
          <RectangleProgressTabs
            activeTabId={
              cardWithQuestion?.question &&
              cardWithQuestion?.question[numberOfQuestion]?.id
            }
            tabsData={data}
          />
        </Stack>
        <StylizedPaper title={cardWithQuestion.title}>
          <span className='mx-auto text-base mb-2.5 font-semibold text-xl text-center'>
            {cardWithQuestion?.question &&
              cardWithQuestion?.question[numberOfQuestion]?.description}
          </span>
          {cardWithQuestion?.question && (
            <TestQuestions
              data={answers}
              valueRadio={valueRadio}
              dataOptions={stateCheck}
              onPress={onPressRadioHandler}
              answerType={type}
              onPressCheck={handlerPressCheck}
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
      )
    </Layout>
  );
};
export default Id;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale as string, ['home', 'testPage'])),
    },
  }));

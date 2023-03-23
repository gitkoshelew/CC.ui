import React, { useState, useEffect, useMemo } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { QuestionTabs } from '../../../components/common/Tabs/QuestionTabs/QuestionTabs';
import { InputField } from '../FieldsComponents/InputFieald';
import { types } from '../../../Mocs/NewTestMoc';
import CreateAnswer from '../FieldsComponents/CreateAnswer/CreateAnswer';
import { quizesApi } from '../../../api/quizesApi';
import { useAppSelector } from '../../../store/store';
import { CreateQuestionType } from '../../../types/CreateQuestionType';
import { ButtonBackHome } from '../../../components/common/ButtonBackHome';
import { Layout } from '../../../components/layout/Layout';
import { StylizedPaper } from '../../../components/common/StylizedPaper/StylizedPaper';
import { QuestionTimer } from '../FieldsComponents/QuestionTimer/QuestionTimer';
import { TypeSwitchSelect } from '../../../types/SelectorType';
import { SelectorFieldDifficulty } from '../FieldsComponents/SelectorField/SelectorFieldDifficulty/SelectorFieldDifficulty';
import { SelectorFieldType } from '../FieldsComponents/SelectorField/SelectorFieldType/SelectorFieldType';

const CreateQuestion = () => {
  const { t } = useTranslation('create-question');
  const router = useRouter();
  const { numberOfQuestions, topicId, quizId } = router.query;
  const { push } = useRouter();

  const difficultyItems = useAppSelector((state) => state.difficulty);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const getNewQuestion = () => ({
    title: '',
    description: '',
    type: types[0],
    difficulty: difficultyItems[0],
    content: {
      options: [],
      correctAnswer: [],
    },
    timerquestion: {
      minutes: 0,
      seconds: 0,
    },
  });

  const [questions, setQuestions] = useState([{ ...getNewQuestion() }]);
  const currentQuestion = useMemo(
    () =>
      questions[currentQuestionIndex] || {
        ...getNewQuestion(),
      },
    [currentQuestionIndex]
  );
  const { handleSubmit, control, reset } = useForm<CreateQuestionType>({
    defaultValues: {
      title: currentQuestion.title,
      description: currentQuestion.description,
      difficulty: currentQuestion.difficulty,
      type: currentQuestion.type,
      content: {
        options: [],
        correctAnswer: [],
      },
      timerquestion: {
        minutes: '0',
        seconds: '0',
      },
    },
  });
  const onSubmitQuestion: SubmitHandler<CreateQuestionType> = async (
    questionData
  ) => {
    const { options, timerquestion } = await questionData;
    const allOptions = options.map((data: { name: string }) => data.name);
    const questionTimerSeconds =
      Number(timerquestion.minutes) * 60 + Number(timerquestion.seconds);
    const milliseconds = questionTimerSeconds * 1000;
    const correctAnswer = options
      .filter((obj: { checked: boolean }) => obj.checked)
      .map((obj: { name: string }) => obj.name);
    const payload = {
      ...questionData,
      content: {
        options: allOptions,
        correctAnswer,
      },
      options: null,
      topicId: Number(topicId),
      timerquestion: null,
      timer: milliseconds,
      quizId,
    };
    const newQuestion = {
      title: '',
      description: '',
      type: types[0],
      difficulty: difficultyItems[0],
      content: {
        options: [],
        correctAnswer: [],
      },
      timerquestion: {
        minutes: 0,
        seconds: 0,
      },
    };
    const newQuestions = questions.concat();
    newQuestions.push(newQuestion);
    setQuestions(newQuestions);
    await quizesApi.postQuestion(payload);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (+currentQuestionIndex + 1 === +numberOfQuestions!) {
      push('/');
    }
  };

  useEffect(() => {
    reset({
      title: currentQuestion.title,
      description: currentQuestion.description,
      content: {
        options: [],
        correctAnswer: [],
      },
      difficulty: currentQuestion.difficulty,
      type: currentQuestion.type,
    });
  }, [
    currentQuestion.content.options,
    currentQuestion.content.correctAnswer,
    currentQuestion.description,
    currentQuestion.difficulty,
    currentQuestion.title,
    currentQuestion.type,
  ]);
  return (
    <Layout>
      <ButtonBackHome />
      <StylizedPaper title={t('Create Question')}>
        <form onSubmit={handleSubmit(onSubmitQuestion)}>
          <QuestionTabs
            numberOfQuestions={Number(numberOfQuestions)}
            activeTab={currentQuestionIndex}
          />
          <Stack spacing={2}>
            <Stack direction='row' flexWrap='wrap' spacing={3}>
              <Box sx={{ flexGrow: 1 }}>
                <InputField
                  nameTitle={t('Question :')}
                  nameControl='title'
                  control={control}
                />
                <InputField
                  nameTitle={t('Description of question :')}
                  nameControl='description'
                  control={control}
                />
              </Box>
            </Stack>
            <Stack direction='row' spacing={3}>
              <Box sx={{ flexGrow: 2 }}>
                {/* <DropDownField */}
                {/*   control={control} */}
                {/*   controlName='type' */}
                {/*   name={t('Questions type :')} */}
                {/*   items={types} */}
                {/* /> */}
                <SelectorFieldType
                  label={t('Type of question')}
                  name='type'
                  control={control}
                  type={TypeSwitchSelect.TYPE}
                />
              </Box>
              <Box sx={{ flexGrow: 10 }}>
                {/* <DropDownField */}
                {/*   control={control} */}
                {/*   controlName='difficulty' */}
                {/*   name={t('Difficulty :')} */}
                {/*   items={difficultyItems} */}
                {/* /> */}
                <SelectorFieldDifficulty
                  label={t('Difficulty of question')}
                  name='difficulty'
                  control={control}
                  type={TypeSwitchSelect.DIFFICULTY}
                />
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Typography typography='inputTitle'>{t('Timer :')}</Typography>
                <QuestionTimer name='timerquestion' control={control} />
              </Box>
            </Stack>
            <Stack spacing={1}>
              <CreateAnswer control={control} name='options' />
            </Stack>
          </Stack>
          <Stack alignItems='center'>
            {/* {Number(currentQuestionIndex + 1) === Number(numberOfQuestions) ? ( */}
            {/*   <Link href='/'> */}
            {/*     <Button type='submit'>{t('Finish')}</Button> */}
            {/*   </Link> */}
            {/* ) : ( */}
            <Button type='submit'>{t('Save question')}</Button>
            {/* )} */}
          </Stack>
        </form>
      </StylizedPaper>
    </Layout>
  );
};

export default CreateQuestion;

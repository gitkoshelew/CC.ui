import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { QuestionTabs } from '../../../components/common/Tabs/QuestionTabs/QuestionTabs';
import { InputField } from '../FieldsComponents/InputFieald';
import { DropDownField } from '../FieldsComponents/DropDownField';
import { types } from '../../../Mocs/NewTestMoc';
import CreateAnswer from '../FieldsComponents/CreateAnswer/CreateAnswer';
import { quizesApi } from '../../../api/quizesApi';
import { useAppSelector } from '../../../store/store';
import { CreateQuestionType } from '../../../types/CreateQuestionType';
import { ButtonBackHome } from '../../../components/common/ButtonBackHome';
import { Layout } from '../../../components/layout/Layout';
import { StylizedPaper } from '../../../components/common/StylizedPaper/StylizedPaper';
import { QuestionTimer } from '../FieldsComponents/QuestionTimer/QuestionTimer';

const CreateQuestion = () => {
  const router = useRouter();
  const { numberOfQuestions, topicId } = router.query;
  const { handleSubmit, control } = useForm<CreateQuestionType>();
  const difficultyItems = useAppSelector((state) => state.difficulty);
  const onSubmitQuestion: SubmitHandler<CreateQuestionType> = async (
    questionData
  ) => {
    const { options, timerquestion } = await questionData;
    const allOptions = options.map((data: { name: any }) => data.name);
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
      options: undefined,
      topicId: Number(topicId),
      timerquestion: undefined,
      timer: milliseconds,
    };
    quizesApi.postQuestion(payload);
  };
  return (
    <Layout>
      <ButtonBackHome />
      <StylizedPaper title='Create Question'>
        <form onSubmit={handleSubmit(onSubmitQuestion)}>
          <QuestionTabs numberOfQuestions={Number(numberOfQuestions)} />
          <Stack spacing={2}>
            <Stack direction='row' flexWrap='wrap' spacing={3}>
              <Box sx={{ flexGrow: 1 }}>
                <InputField
                  nameTitle='Question :'
                  nameControl='title'
                  control={control}
                />
                <InputField
                  nameTitle='Description of question :'
                  nameControl='description'
                  control={control}
                />
              </Box>
            </Stack>
            <Stack direction='row' spacing={3}>
              <Box sx={{ flexGrow: 1 }}>
                <DropDownField
                  control={control}
                  controlName='type'
                  name='Questions type :'
                  items={types}
                />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <DropDownField
                  control={control}
                  controlName='difficulty'
                  name='Difficulty :'
                  items={difficultyItems}
                />
              </Box>
              <Box sx={{ flexGrow: 2 }}>
                <Typography typography='inputTitle'>Timer :</Typography>
                <QuestionTimer name='timerquestion' control={control} />
              </Box>
            </Stack>
            <Stack spacing={1}>
              <CreateAnswer control={control} name='options' />
            </Stack>
          </Stack>
          <Stack alignItems='center'>
            <Button type='submit'>Save question</Button>
          </Stack>
        </form>
      </StylizedPaper>
    </Layout>
  );
};

export default CreateQuestion;

import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { QuestionTabs } from '../../../components/common/Tabs/QuestionTabs/QuestionTabs';
import { questionsData } from '../../../Mocs/QuestionTabsMoc';
import { InputField } from '../FieldsComponents/InputFieald';
import { DropDownField } from '../FieldsComponents/DropDownField';
import { types } from '../../../Mocs/NewTestMoc';
import CreateAnswer from '../FieldsComponents/CreateAnswer/CreateAnswer';
import { quizesApi } from '../../../api/quizesApi';
import { useAppSelector } from '../../../store/store';
import { CreateQuestionType } from '../../../Types/CreateQuestionType';

export const CreateQuestion = () => {
  const { handleSubmit, control } = useForm<CreateQuestionType>();
  const difficultyItems = useAppSelector((state) => state.difficulty);
  const onSubmitQuestion: SubmitHandler<CreateQuestionType> = (
    questionData
  ) => {
    const { options, correctAnswer } = questionData.content;

    console.log(questionData);
    const payload = {
      ...questionData,
      content: { options, correctAnswer },
      timer: 1000,
    };
    quizesApi.postQuestion(payload);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitQuestion)}>
      <QuestionTabs activeQuestionId='' questionsData={questionsData} />
      <Stack spacing={2}>
        <Stack direction='row' flexWrap='wrap' spacing={3}>
          <Box sx={{ flexGrow: 1 }}>
            <InputField
              nameTitle='Question'
              nameControl='question'
              control={control}
            />
          </Box>
        </Stack>
        <Stack direction='row' flexWrap='wrap' spacing={3}>
          <Box sx={{ flexGrow: 0.5 }}>
            <DropDownField
              control={control}
              controlName='type'
              name='Questions type:'
              items={types}
            />
          </Box>
          <Box sx={{ flexGrow: 0.5 }}>
            <DropDownField
              control={control}
              controlName='difficulty'
              name='Difficulty:'
              items={difficultyItems}
            />
          </Box>
          <Box sx={{ maxWidth: '114px' }}>
            <Stack>
              <Typography typography='inputTitle'>Timer</Typography>
              <Stack direction='row' spacing={1} alignItems='center'>
                {/* <QuestionTimer control={control} /> */}
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Stack spacing={1}>
          <CreateAnswer control={control} name='options' />
        </Stack>
      </Stack>
      <Stack alignItems='center'>
        <Button type='submit'>Save test</Button>
      </Stack>
    </form>
  );
};

import { Box, Button, Stack } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputField } from '../FieldsComponents/InputFieald';
import TopicSelect from '../FieldsComponents/CreateTopic/CreateTopic';
import { SelectorField } from '../FieldsComponents/SelectorField/SelectorField';
import { CreateQuizType } from "../../../types/CreateQuizType";
import { quizesApi } from "../../../api/quizesApi";
import { TypeSwitchSelect } from "../../../types/SelectorType";


export const CreateQuiz = () => {
  const { handleSubmit, control } = useForm<CreateQuizType>();
  const onSubmitQuiz: SubmitHandler<CreateQuizType> = (quizData) => {
    quizesApi.postQuizes(quizData);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitQuiz)}>
      <Stack
        bgcolor='background.paperAccent2'
        borderRadius={1}
        border={1}
        borderColor='background.border'
        spacing={2}
        p={3}
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <Box sx={{ flexGrow: 1 }}>
            <InputField
              nameTitle='Test title'
              nameControl='title'
              control={control}
            />
          </Box>
          <Box sx={{ flexGrow: 2 }}>
            <InputField
              nameControl='description'
              nameTitle='Test description'
              control={control}
            />
          </Box>
        </Stack>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          flexWrap='wrap'
          spacing={3}
        >
          <Box flexGrow={1}>
            <TopicSelect name='topic' control={control} />
          </Box>
          <Box flexGrow={1}>
            <SelectorField
              label='Number of questions'
              name='numberOfQuestions'
              control={control}
              type={TypeSwitchSelect.NUMBER}
            />
          </Box>
        </Stack>
        <Stack alignItems='center' marginTop='20px'>
          <Button type='submit'>Save quiz</Button>
        </Stack>
      </Stack>
    </form>
  );
};

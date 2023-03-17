import { Box, Button, Stack } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';
import { InputField } from '../FieldsComponents/InputFieald';
import TopicSelect from '../FieldsComponents/CreateTopic/CreateTopic';
import { SelectorField } from '../FieldsComponents/SelectorField/SelectorField';
import { CreateQuizType } from '../../../types/CreateQuizType';
import { quizesApi } from '../../../api/quizesApi';
import { TypeSwitchSelect } from '../../../types/SelectorType';
import { ButtonBackHome } from '../../../components/common/ButtonBackHome';
import { StylizedPaper } from '../../../components/common/StylizedPaper/StylizedPaper';
import { Layout } from '../../../components/layout/Layout';

const CreateQuiz = () => {
  const { handleSubmit, control } = useForm<CreateQuizType>();
  const router = useRouter();
  const onSubmitQuiz: SubmitHandler<CreateQuizType> = async (quizData) => {
    const { numberOfQuestions } = quizData;
    const responseTopic = await axios
      .get('http://localhost:5000/api/topic')
      .then((response: any) => {
        console.log(response.data.length - 1);
        const fieldValue = response.data[response.data.length - 1].id;
        return fieldValue;
      })
      .catch((error) => 1);
    const payload = {
      ...quizData,
      numberOfQuestions: undefined,
      topicId: responseTopic,
    };
    try {
      const response = await quizesApi.postQuizes(payload);
      router.push({
        pathname: '/create-test/create-question',
        query: {
          numberOfQuestions: +numberOfQuestions,
          topicId: responseTopic,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <ButtonBackHome />
      <StylizedPaper title='Create Quiz'>
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
            <InputField
              nameControl='comment'
              nameTitle='Comment'
              control={control}
            />
            <Stack alignItems='center' marginTop='20px'>
              <Button type='submit'>Save quiz</Button>
            </Stack>
          </Stack>
        </form>
      </StylizedPaper>
    </Layout>
  );
};

export default CreateQuiz;

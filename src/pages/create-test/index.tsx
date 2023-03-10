import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { QuestionTabs } from '../../components/common/Tabs/QuestionTabs/QuestionTabs';
import { questionsData } from '../../Mocs/QuestionTabsMoc';
import { InputField } from './FieldsComponents/InputFieald';
import { DropDownField } from './FieldsComponents/DropDownField';
import { SelectorField } from './FieldsComponents/SelectorField/SelectorField';
import { quizesApi } from '../../api/quizesApi';
import { useAppSelector } from '../../store/store';
import { TypeSwitchSelect } from '../../Types/SelectorType';
import { types } from '../../Mocs/NewTestMoc';
import { CreateQuestionPropsType } from '../../Types/CreateQuestionPropsType';
import CreateAnswer from './FieldsComponents/CreateAnswer/CreateAnswer';
import TopicSelect from './FieldsComponents/CreateTopic/CreateTopic';

type correctAnswersType = {
  name: string;
};

export default function NewTest(props: CreateQuestionPropsType) {
  const { handleSubmit, control } = useForm<FieldValues>();
  const [quizId, setQuizId] = useState(false);
  const difficultyItems = useAppSelector((state) => state.difficulty);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    quizesApi.postQuizes(data);
    setQuizId(true);
  };
  const onSubmitQuestion: SubmitHandler<FieldValues> = (questionData) => {
    const { options } = questionData;
    // const correctAnswers: correctAnswersType[] = [];
    // // const answersVariants: answersVariantsType[] = questionData.content.options;
    // type answersVariantsType = {
    //   name: string;
    //   checked: boolean;
    // };
    // // eslint-disable-next-line consistent-return
    // async function getData() {
    //   try {
    //     const answersVariants = await questionData.content.options;
    //     answersVariants.map((item: answersVariantsType) => {
    //       if (item.checked) {
    //         // @ts-ignore
    //         correctAnswers.push(item.name);
    //       }
    //       return correctAnswers;
    //     });
    //   } catch (error) {
    //     return correctAnswers;
    //   }
    // }
    // getData();

    // console.log(questionData);
    // const payload = {
    //   ...questionData,
    //   content: { options, correctAnswer: correctAnswers },
    //   timer: 1000,
    // };
    // // @ts-ignore
    // delete payload.options;
    // console.log(payload);
    // quizesApi.postQuestion(payload);
  };
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get('quizId'));
  }, [searchParams]);

  const router = useRouter();

  return (
    <Layout>
      <ButtonBackHome />
      <StylizedPaper title='Create test'>
        {quizId ? null : (
          <form onSubmit={handleSubmit(onSubmit)}>
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
        )}
        {quizId ? (
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
        ) : null}
      </StylizedPaper>
    </Layout>
  );
}

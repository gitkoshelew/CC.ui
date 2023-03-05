import { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
  useWatch,
} from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
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
import { themes, types } from '../../Mocs/NewTestMoc';
import { CreateAnswer } from './FieldsComponents/CreateAnswer/CreateAnswer';
import { CreateQuestionPropsType } from '../../Types/CreateQuestionPropsType';

export default function NewTest(props: CreateQuestionPropsType) {
  const { currentQuestion } = props;
  const { handleSubmit, control } = useForm<FieldValues>();
  const [quizId, setQuizId] = useState(false);
  const difficultyItems = useAppSelector((state) => state.difficulty);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    quizesApi.postQuizes(data);
  };
  const currentArrayOptions = useWatch({
    control,
    name: 'options',
  });
  const { fields, append, remove } = useFieldArray({
    name: 'options',
    control,
  });

  const onPressAddNewOption = useCallback(() => {
    append([{ option: '' }]);
  }, [append]);

  const arrayOptions = useMemo(
    () =>
      currentArrayOptions
        ? currentArrayOptions
            .map((el: { option: any }) => el.option)
            .filter((el: string) => el !== '')
        : [],
    [currentArrayOptions]
  );
  const isCheckingDuplicate =
    new Set(arrayOptions).size !== arrayOptions.length;

  const currentType = useWatch({
    control,
    name: 'type',
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get('quizId'));
  }, [searchParams]);

  const onPressDeleteOption = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove]
  );

  const [correctAnswers, setCorrectAnswers] = useState(
    currentQuestion.content.correctAnswer
  );

  const checkedCorrectOption = useCallback(
    (index: number, checked: boolean, textOption: string) => {
      if (textOption !== '' && checked) {
        setCorrectAnswers((state) => [...state, textOption]);
      } else {
        setCorrectAnswers((state) => state.filter((el) => el !== textOption));
      }
    },
    []
  );

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
                  <DropDownField
                    name='Theme'
                    controlName='theme'
                    items={themes}
                    control={control}
                  />
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
                <Button onClick={() => setQuizId(true)} type='submit'>
                  Save quiz
                </Button>
              </Stack>
            </Stack>
          </form>
        )}
        {quizId ? (
          <form>
            <QuestionTabs activeQuestionId='' questionsData={questionsData} />
            <Stack spacing={2}>
              <Stack direction='row' flexWrap='wrap' spacing={3}>
                <Box sx={{ flexGrow: 1 }}>
                  <InputField
                    nameTitle='Question'
                    nameControl='Question'
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
                      {/* <TextField {...register('timer')} /> */}
                      {/* <Typography>:</Typography> */}
                      {/* <TextField {...register('timer')} /> */}
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
              <Stack spacing={1}>
                <CreateAnswer
                  fields={fields}
                  control={control}
                  type={currentType}
                  isCheckingDuplicate={isCheckingDuplicate}
                  addNewOptionPressed={onPressAddNewOption}
                  deleteOptionPressed={onPressDeleteOption}
                  checkedCorrectOption={checkedCorrectOption}
                  correctAnswer={correctAnswers}
                />
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

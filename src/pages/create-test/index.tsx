import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Layout } from '../../components/layout/Layout';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { level, numberQuestions, themes, types } from '../../Mocs/NewTestMoc';
import { QuestionTabs } from '../../components/common/Tabs/QuestionTabs/QuestionTabs';
import { questionsData } from '../../Mocs/QuestionTabsMoc';
import { InputField } from './FieldsComponents/InputFieald';
import { DropDownField } from './FieldsComponents/DropDownField';
import { SelectorField } from './FieldsComponents/SelectorField/SelectorField';
import { quizesApi } from '../../api/quizesApi';
import { PlusIcon } from '../../assets/icons/PlusIcon';
import { useAppSelector } from '../../store/store';
import { CheckBoxField } from './FieldsComponents/CheckBoxField';
import { TypeSwitchSelect } from '../../Types/SelectorType';

enum Difficulty {
  Easy = '0',
  Medium = '1',
  Hard = '2',
}

export default function NewTest() {
  const [themeValue, setThemeValue] = useState('3');
  const [typeValue, setTypeValue] = useState('0');
  const [difficulty, setDifficultyValue] = useState(Difficulty.Easy);
  const [levelValue, setLevelValue] = useState('0');
  const [numQuestionValue, setNumQuestionValue] = useState('0');

  const handleThemeChange = (event: SelectChangeEvent) => {
    setThemeValue(event.target.value);
  };
  const handleTypeChange = (event: SelectChangeEvent) => {
    setTypeValue(event.target.value);
  };
  const handleDifficultyChange = (event: SelectChangeEvent) => {
    setDifficultyValue(event.target.value as Difficulty);
  };
  const handleLevelChange = (difficultyLevel: string) => {
    setLevelValue(difficultyLevel);
  };
  const handleNumOfQuestionChange = (difficultyNumQuestion: string) => {
    setNumQuestionValue(difficultyNumQuestion);
  };
  const { register, handleSubmit, control } = useForm<FieldValues>();
  const difficultyItems = useAppSelector((state) => state.difficulty);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    quizesApi.postQuizes(data);
  };

  return (
    <Layout>
      <ButtonBackHome />
      <StylizedPaper title='Create test'>
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
                  registerName='title'
                  register={register}
                  name='Test title'
                  placeholderInput='Add test title'
                />
              </Box>
              <Box sx={{ flexGrow: 2 }}>
                <InputField
                  registerName='description'
                  register={register}
                  name='Test description'
                  placeholderInput='Add test description'
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
                  register={register}
                  registerName='theme'
                  name='Theme'
                  value={themeValue}
                  handleChange={handleThemeChange}
                  items={themes}
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
          </Stack>
          <QuestionTabs activeQuestionId='' questionsData={questionsData} />
          <Stack spacing={2}>
            <Stack direction='row' flexWrap='wrap' spacing={3}>
              <Box sx={{ flexGrow: 1 }}>
                <InputField
                  name='Question'
                  placeholderInput='Add a question'
                  register={register}
                  registerName='options'
                />
              </Box>
            </Stack>
            <Stack direction='row' flexWrap='wrap' spacing={3}>
              <Box sx={{ flexGrow: 0.5 }}>
                <DropDownField
                  register={register}
                  registerName='type'
                  name='Questions type:'
                  value={typeValue}
                  handleChange={handleTypeChange}
                  items={types}
                />
              </Box>
              <Box sx={{ flexGrow: 0.5 }}>
                <DropDownField
                  register={register}
                  registerName='difficulty'
                  name='Difficulty:'
                  value={difficulty}
                  items={difficultyItems}
                  handleChange={handleDifficultyChange}
                />
              </Box>
              <Box sx={{ maxWidth: '114px' }}>
                <Stack>
                  <Typography typography='inputTitle'>Timer</Typography>
                  <Stack direction='row' spacing={1} alignItems='center'>
                    <TextField {...register('timer')} />
                    <Typography>:</Typography>
                    <TextField {...register('timer')} />
                  </Stack>
                </Stack>
              </Box>
            </Stack>
            <Stack spacing={1}>
              <Typography typography='inputTitle'>Answer choice</Typography>
              <Stack direction='row' spacing={3} alignItems='center'>
                <Box sx={{ flexGrow: 1 }}>
                  <InputField
                    registerName='correctAnswer'
                    register={register}
                    name=''
                    placeholderInput='Answer variant'
                  />
                </Box>
                <CheckBoxField />
              </Stack>
              <Stack direction='row' alignItems='center' paddingLeft={3}>
                <PlusIcon />
                <Typography typography='inputTitle'>Add answer</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack alignItems='center'>
            <Button type='submit'>Save test</Button>
          </Stack>
        </form>
      </StylizedPaper>
    </Layout>
  );
}

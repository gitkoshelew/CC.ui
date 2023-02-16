import { SelectChangeEvent } from '@mui/material/Select';
import { MouseEventHandler, useState } from 'react';
import { Box, Button, Stack } from '@mui/material';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Layout } from '../../components/layout/Layout';
import { QuestionBlock } from '../../components/new-test/QuestionBlock';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { ButtonSaveTest } from '../../components/new-test/ButtonSaveTest';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { level, numberQuestions, themes, types } from '../../Mocs/NewTestMoc';
import { QuestionTabs } from '../../components/common/Tabs/QuestionTabs/QuestionTabs';
import { questionsData } from '../../Mocs/QuestionTabsMoc';
import { InputField } from './FieldsComponents/InputFieald';
import { DropDownField } from './FieldsComponents/DropDownField';
import { RadioButtonField } from './FieldsComponents/RadioButtonField';
import { SuperButtonGroup } from '../../components/new-test/SuperButtonGroup';
import { quizesApi } from '../../api/quizesApi';
import { QuizesType } from '../../components/common/types';

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
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> =  (data) => {
    console.log(data)
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
                  name='Test title'
                  placeholderInput='Add test title'
                />
              </Box>
              <Box sx={{ flexGrow: 2 }}>
                <InputField
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
                  name='Theme'
                  value={themeValue}
                  handleChange={handleThemeChange}
                  items={themes}
                />
              </Box>
              <Box flexGrow={1}>
                <RadioButtonField
                  name='Test level'
                  items={level}
                  value={levelValue}
                  onChange={handleLevelChange}
                  active={levelValue}
                  register={register}
                />
              </Box>
              <Box flexGrow={1}>
                <InputField name='test' placeholderInput='test' />
              </Box>
            </Stack>
          </Stack>
          <QuestionTabs activeQuestionId='' questionsData={questionsData} />
          <QuestionBlock
            value={typeValue}
            difficulty={difficulty}
            handleTypeChange={handleTypeChange}
            onDifficultyChange={handleDifficultyChange}
            items={types}
          />
          <Stack alignItems='center'>
            <Button type='submit'>Save test</Button>
          </Stack>
        </form>
      </StylizedPaper>
    </Layout>
  );
}

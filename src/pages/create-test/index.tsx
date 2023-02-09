import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from '../../components/layout/Layout';
import { QuestionBlock } from '../../components/new-test/QuestionBlock';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import SaveTestButton from '../../components/new-test/SaveTestButton';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { level, numberQuestions, themes, types } from '../../Mocs/NewTestMoc';
import { SettingsBlock } from '../../components/new-test/SettingsBlock';
import { QuestionTabs } from '../../components/common/Tabs/QuestionTabs/QuestionTabs';
import { questionsData } from '../../Mocs/QuestionTabsMoc';
import { quizzesApi } from '../../api/quizzesApi';
import { postQuizesAc } from '../../store/reducers/quizes-reducer';

// <Remark>
// Avoid using enums
enum Difficulty {
  Easy = '0',
  Medium = '1',
  Hard = '2',
}

// <Remark>
// Use api requests here
// Take it away from <SaveTestButton /> component
// And then pass it as props
export default function NewTest() {
  const dispatch = useDispatch();
  const [themeValue, setThemeValue] = useState('3');
  const [typeValue, setTypeValue] = useState('0');
  const [difficulty, setDifficultyValue] = useState(Difficulty.Easy);

  const handleThemeChange = (event: SelectChangeEvent) => {
    setThemeValue(event.target.value);
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    setTypeValue(event.target.value);
  };

  // <Remark>
  // use some spacing between the function declarations
  const handleDifficultyChange = (event: SelectChangeEvent) => {
    setDifficultyValue(event.target.value as Difficulty);
  };

  const handleTestSave = async () => {
    const postRes = await quizzesApi.postQuizzes();
    dispatch(postQuizesAc(postRes.data));
  };

  return (
    <Layout>
      <ButtonBackHome />
      <StylizedPaper title='Create test'>
        <SettingsBlock
          value={themeValue}
          handleThemeChange={handleThemeChange}
          items={themes}
          level={level}
          numberQuestions={numberQuestions}
        />

        <QuestionTabs activeQuestionId='' questionsData={questionsData} />

        <QuestionBlock
          value={typeValue}
          difficulty={difficulty}
          handleTypeChange={handleTypeChange}
          onDifficultyChange={handleDifficultyChange}
          items={types}
        />

        <SaveTestButton onClick={handleTestSave} />
      </StylizedPaper>
    </Layout>
  );
}

import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { QuestionBlock } from '../../components/new-test/QuestionBlock';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { ButtonSaveTest } from '../../components/new-test/ButtonSaveTest';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { level, numberQuestions, themes, types } from '../../Mocs/NewTestMoc';
import { SettingsBlock } from '../../components/new-test/SettingsBlock';
import { QuestionTabs } from '../../components/common/Tabs/QuestionTabs/QuestionTabs';
import { questionsData } from '../../Mocs/QuestionTabsMoc';

export default function NewTest() {
  const [themeValue, setThemeValue] = useState('3');
  const [typeValue, setTypeValue] = useState('0');

  const handleThemeChange = (event: SelectChangeEvent) => {
    setThemeValue(event.target.value);
  };
  const handleTypeChange = (event: SelectChangeEvent) => {
    setTypeValue(event.target.value);
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
          handleTypeChange={handleTypeChange}
          items={types}
        />
        <ButtonSaveTest />
      </StylizedPaper>
    </Layout>
  );
}

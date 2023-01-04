import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Layout } from '../../components/layout/Layout';
import { QuestionBlock } from '../../components/new-test/QuestionBlock';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { ButtonSaveTest } from '../../components/new-test/ButtonSaveTest';
import { WrapperNewTest } from '../../components/new-test/WrapperNewTest';
import { level, numberQuestions, themes, types } from '../../Mocs/NewTestMoc';
import { SettingsBlock } from '../../components/new-test/SettingsBlock';

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
      <WrapperNewTest>
        <SettingsBlock
          value={themeValue}
          handleThemeChange={handleThemeChange}
          items={themes}
          level={level}
          numberQuestions={numberQuestions}
        />
        <Typography>question tabs component</Typography>
        <QuestionBlock
          value={typeValue}
          handleTypeChange={handleTypeChange}
          items={types}
        />
        <ButtonSaveTest />
      </WrapperNewTest>
    </Layout>
  );
}

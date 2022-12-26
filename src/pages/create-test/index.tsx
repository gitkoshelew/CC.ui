import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { TitleBlock } from '../../components/new-test/TitleBlock';
import { QuestionBlock } from '../../components/new-test/QuestionBlock';
import { QuestionsBlock } from '../../components/new-test/QuestionsBlock';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { ButtonSaveTest } from '../../components/new-test/ButtonSaveTest';
import { WrapperNewTest } from '../../components/new-test/WrapperNewTest';
import { questions, themes, types } from '../../Mocs/NewTestMoc';

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
        <TitleBlock
          value={themeValue}
          handleThemeChange={handleThemeChange}
          items={themes}
        />
        <QuestionBlock
          value={typeValue}
          handleTypeChange={handleTypeChange}
          items={types}
        />
        <QuestionsBlock questions={questions} />
        <ButtonSaveTest />
      </WrapperNewTest>
    </Layout>
  );
}

import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/material';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { Layout } from '../../components/layout/Layout';
import { tabsData } from '../../Mocs/RectangleProgressBarMoc';
import { WrapperNewTest } from '../../components/new-test/WrapperNewTest';
import { Timer } from '../../components/Timer/Timer';
import { timeDefault } from '../../Mocs/TimerMock';
import TestQuestions from './TestQuestions';
import { testQuestions } from '../../Mocs/QuizMock';
import { RectangleProgressTabs } from '../../components/common/Tabs/RectangleProgressTabs/RectangleProgressTabs';

const Quiz = () => (
  <Layout>
    <ButtonBackHome />
    <Box sx={{ width: 1, maxWidth: '853px', mx: 'auto' }}>
      <Timer timeDefault={timeDefault} />
      <RectangleProgressTabs
        activeTabId='1'
        tabsData={tabsData}
        isTabsStatusHidden={false}
      />
    </Box>

    <WrapperNewTest>
      <span className=' mx-auto text-base '>“Node.js” question</span>
      <span className=' mx-auto text-base '>
        What is the correct JavaScript syntax to change the content of the HTML
        element below?
      </span>
      <TestQuestions testQuestions={testQuestions} />
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Button color='info'>Skip</Button>
        <Button>Next</Button>
      </Stack>
    </WrapperNewTest>
  </Layout>
);

export default Quiz;

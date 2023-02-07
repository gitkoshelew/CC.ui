import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { Timer } from '../../components/Timer/Timer';
import { timeDefault } from '../../Mocs/TimerMock';
import { CircularProgressBar } from '../../components/common/CircularProgressBar/CircularProgressBar';
import { RectangleProgressTabs } from '../../components/common/Tabs/RectangleProgressTabs/RectangleProgressTabs';
import { tabsData } from '../../Mocs/RectangleProgressBarMoc';
import { BasicTable } from '../../components/common/IncorrectAnswers/BasicTable';
import { ResultTableData } from '../../Mocs/TableResultMoc';
import { ShieldIcon } from '../../assets/icons/ShieldIcon';
import { EditIcon } from '../../assets/icons/EditIcon';
import { BasketBlackIcon } from '../../assets/icons/BasketBlackIcon';

export default function ResultPage() {
  const [currentTime, setCurrentTime] = useState(timeDefault);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <Layout>
      <ButtonBackHome />
      <Timer
        timeDefault={timeDefault}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
      <RectangleProgressTabs
        activeTabId='1'
        tabsData={tabsData}
        isTabsStatusHidden={false}
      />
      <StylizedPaper title='Your result'>
        <Stack direction='row' spacing={2} position='absolute' right={40}>
          <Stack>
            <ShieldIcon />
          </Stack>
          <Stack>
            <EditIcon />
          </Stack>
          <Stack>
            <BasketBlackIcon />
          </Stack>
        </Stack>
        <CircularProgressBar value={70} fontSize='xx-large' />
        <BasicTable IncorrectAnswersList={ResultTableData} />
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={4}
        >
          <Link href='/testPage'>
            <Button>Try Again</Button>
          </Link>
          <Link href='/'>
            <Button color='info'>Close</Button>
          </Link>
        </Stack>
      </StylizedPaper>
    </Layout>
  );
}

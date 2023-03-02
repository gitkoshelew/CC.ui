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
// eslint-disable-next-line import/no-cycle
import { RectangleProgressTabs } from '../../components/common/Tabs/RectangleProgressTabs/RectangleProgressTabs';
import { BasicTable } from '../../components/common/IncorrectAnswers/BasicTable';
import { ShieldIcon } from '../../assets/icons/ShieldIcon';
import { EditIcon } from '../../assets/icons/EditIcon';
import { BasketBlackIcon } from '../../assets/icons/BasketBlackIcon';
import { useAppSelector } from '../../store/store';

export type ResultTableDataType = {
  id: number;
  incorrectAnswer: string;
};

export type TabsDataType = {
  id: number;
  color: string;
};

export default function ResultPage() {
  const [currentTime, setCurrentTime] = useState(timeDefault);
  const [isRunning, setIsRunning] = useState(false);
  const resultData = useAppSelector((state) => state.resultData.result);
  const incorrectData = resultData.filter((e) => e.questionStatus === 'error');
  const correctData = resultData.filter((e) => e.questionStatus === 'right');

  const progressData: ResultTableDataType[] = incorrectData.map((e) => ({
    id: e.id,
    incorrectAnswer: e.answer,
  }));

  const tabsDatas: TabsDataType[] = resultData.map((e) => ({
    id: e.id,
    color: e.questionStatus,
  }));

  const result = (100 / resultData.length) * correctData.length;
  return (
    <Layout>
      <ButtonBackHome />
      <Stack spacing={2} direction='column'>
        <Stack
          spacing={4}
          direction='column'
          sx={{ width: 1, maxWidth: '850px', mx: 'auto' }}
        >
          {/* <Timer */}
          {/*   timeDefault={timeDefault} */}
          {/*   isRunning={isRunning} */}
          {/*   setIsRunning={setIsRunning} */}
          {/*   currentTime={currentTime} */}
          {/*   setCurrentTime={setCurrentTime} */}
          {/* /> */}
          <RectangleProgressTabs activeTabId='1' tabsData={tabsDatas} />
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
            <CircularProgressBar value={result} fontSize='xx-large' />
            <BasicTable IncorrectAnswersList={progressData} />
            <Stack
              direction='row'
              justifyContent='center'
              alignItems='center'
              spacing={4}
            >
              <Link href='/'>
                <Button>Try Again</Button>
              </Link>
              <Link href='/'>
                <Button color='info'>Close</Button>
              </Link>
            </Stack>
          </StylizedPaper>
        </Stack>
      </Stack>
    </Layout>
  );
}

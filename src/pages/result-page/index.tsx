import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { RectangleProgressTabs } from '../../components/common/Tabs/RectangleProgressTabs/RectangleProgressTabs';
import { Layout } from '../../components/layout/Layout';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { CircularProgressBar } from '../../components/common/CircularProgressBar/CircularProgressBar';
import { BasicTable } from '../../components/common/IncorrectAnswers/BasicTable';
import { ShieldIcon } from '../../assets/icons/ShieldIcon';
import { EditIcon } from '../../assets/icons/EditIcon';
import { BasketBlackIcon } from '../../assets/icons/BasketBlackIcon';
import { useAppSelector, wrapper } from '../../store/store';
import { TabsDataType } from '../../types/types';

export type ResultTableDataType = {
  id: number;
  incorrectAnswer: string;
};

export default function ResultPage() {
  const resultData = useAppSelector((state) => state.resultData.result);
  const incorrectData = resultData.filter((e) => e.questionStatus === 'error');
  const correctData = resultData.filter((e) => e.questionStatus === 'right');
  const { t } = useTranslation('home');

  const progressData: ResultTableDataType[] = useMemo(
    () =>
      incorrectData &&
      incorrectData.map((e) => ({
        id: e.id,
        incorrectAnswer: e.answer,
      })),
    [incorrectData]
  );

  const tabsDatas: TabsDataType[] = useMemo(
    () =>
      resultData &&
      resultData.map((e) => ({
        id: e.id,
        color: e.questionStatus,
      })),
    [resultData]
  );

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
          <RectangleProgressTabs activeTabId={1} tabsData={tabsDatas} />
          <StylizedPaper title='Your result' i18nName='resultPage'>
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
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale as string, ['home', 'testPage'])),
    },
  }));

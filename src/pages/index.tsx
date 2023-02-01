import Container from '@mui/material/Container';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import LinearProgress from '@mui/material/LinearProgress';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/layout/navigation/Navigation';
import { CardsWithQuizes } from '../components/cards/CardsWithQuizes';
import { categories, sort } from '../Mocs/NavigationMoc';
import { useAppSelector, wrapper } from '../store/store';
import { QuizesType } from '../components/common/types';
import { fetchQuizes } from '../store/reducers/quizes-reducer';

export default function Home({ quizes }: { quizes: QuizesType[] }) {
  const status = useAppSelector((state) => state.app.status);
  return (
    <Layout headerType='full'>
      <Container>
        {status === 'loading' && <LinearProgress />}
        <Navigation sort={sort} categories={categories} />
        <CardsWithQuizes quizes={quizes} />
      </Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ locale }) => {
    await store.dispatch(fetchQuizes());
    const { quizes } = store.getState().quizzes;

    return {
      props: {
        quizes,
        ...(await serverSideTranslations(locale as string, [
          'home',
          'testPage',
        ])),
      },
    };
  });

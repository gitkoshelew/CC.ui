import Container from '@mui/material/Container';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/layout/navigation/Navigation';
import { CardsWithQuizes } from '../components/cards/CardsWithQuizes';
import { categories, sort } from '../Mocs/NavigationMoc';
import { wrapper } from '../store/store';
import { fetchQuizesAC } from '../store/reducers/quizes-reducer';
import { quizesApi } from '../api/quizesApi';
import { QuizesType } from '../components/common/types';

export default function Home({ quizes }: { quizes: QuizesType[] }) {
  return (
    <Layout headerType='full'>
      <Container>
        <Navigation sort={sort} categories={categories} />
        <CardsWithQuizes quizes={quizes} />
      </Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ locale }) => {
    const res = await quizesApi.getQuizes();
    store.dispatch(fetchQuizesAC(res.data));

    return {
      props: {
        quizes: res.data,
        ...(await serverSideTranslations(locale as string, [
          'home',
          'testPage',
        ])),
      },
    };
  });

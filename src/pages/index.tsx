import Container from '@mui/material/Container';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/layout/navigation/Navigation';
import { CardsWithQuizzes } from '../components/cards/CardsWithQuizzes';
import { categories, sort } from '../Mocs/NavigationMoc';
import { wrapper } from '../store/store';
import { QuizType } from '../components/common/types';
import { fetchQuizes } from '../store/reducers/quizes-reducer';

export default function Home({ quizes }: { quizes: QuizType[] }) {
  return (
    <Layout headerType='full'>
      <Container>
        <Navigation sort={sort} categories={categories} />
        <CardsWithQuizzes quizzes={quizes} />
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

import Container from '@mui/material/Container';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/layout/navigation/Navigation';
import { CardsWithQuizes } from '../components/cards/CardsWithQuizes';
import { categories, sorts } from '../Mocs/NavigationMoc';
import { wrapper } from '../store/store';
import { fetchQuizes } from '../store/reducers/quizzes-reducer';
import { CardType } from '../types/CardTypes';

export default function Home({ quizes }: { quizes: CardType[] }) {
  return (
    <Layout headerType='full'>
      <Container>
        <Navigation sorts={sorts} categories={categories} />
        <CardsWithQuizes quizzes={quizes} />
      </Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ locale }) => {
    await store.dispatch(fetchQuizes());
    const { quizes } = store.getState().quizes;
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

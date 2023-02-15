import Container from '@mui/material/Container';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/layout/navigation/Navigation';
import { CardsWithQuizes } from '../components/cards/CardsWithQuizes';
import { categories, sort } from '../Mocs/NavigationMoc';
import { wrapper } from '../store/store';
import { fetchQuizes } from '../store/reducers/quizes-reducer';
import { CardsType } from '../Types/CardTypes';

export default function Home({ quizes }: { quizes: CardsType[] }) {
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

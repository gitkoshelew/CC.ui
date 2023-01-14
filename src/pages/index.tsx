import Container from '@mui/material/Container';
import { Provider } from 'react-redux';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/layout/navigation/Navigation';
import { Cards } from '../components/cards/Cards';
import { categories, sort } from '../Mocs/NavigationMoc';
import { store } from '../store/Store';
import { quizesApi } from '../api/as';

export default function Home({ cards }) {
  return (
    <Provider store={store}>
      <Layout headerType='full'>
        <Container>
          <Navigation sort={sort} categories={categories} />
          <Cards cards={cards} />
        </Container>
      </Layout>
    </Provider>
  );
}

export async function getServerSideProps() {
  const res = await quizesApi.getQuizes();
  const data = await res.data;

  return {
    props: {
      cards: data,
    },
  };
}

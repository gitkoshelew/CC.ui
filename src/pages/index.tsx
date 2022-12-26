import Container from '@mui/material/Container';
import { Layout } from '../components/layout/Layout';
import { Navigation } from '../components/layout/navigation/Navigation';
import { Cards } from '../components/cards/Cards';
import { cards } from '../Mocs/CardMoc';
import { categories, sort } from '../Mocs/NavigationMoc';

export default function Home() {
  return (
    <Layout headerType='full'>
      <Container>
        <Navigation sort={sort} categories={categories} />
        <Cards cards={cards} />
      </Container>
    </Layout>
  );
}

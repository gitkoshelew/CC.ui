import Home from '../../pages';
import { cards } from '../../Mocs/CardMoc';

export default {
  title: 'Pages/Home',
  component: Home,
};

export const HomePage = () => <Home quizzes={cards} />;

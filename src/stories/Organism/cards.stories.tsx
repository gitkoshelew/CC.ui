import { CardsWithQuizzes } from '../../components/cards/CardsWithQuizzes';
import { cards } from '../../Mocs/CardMoc';

export const Default = () => <CardsWithQuizzes quizzes={cards} />;

export default {
  title: 'Organism/CardsQuizes',
  component: Default,
};

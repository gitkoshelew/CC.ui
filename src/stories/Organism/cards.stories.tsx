import { CardsWithQuizes } from '../../components/cards/CardsWithQuizes';
import { cards } from '../../Mocs/CardMoc';

export const Default = () => <CardsWithQuizes quizes={cards} />;

export default {
  title: 'Organism/CardsQuizes',
  component: Default,
};

import { Sorting } from '../../components/layout/navigation/sorting/Sorting';
import { sorts } from '../../Mocs/NavigationMoc';

export const DefaultSorting = () => <Sorting sorts={sorts} />;

export default {
  title: 'Organism/Navigation/sorting',
  component: DefaultSorting,
};

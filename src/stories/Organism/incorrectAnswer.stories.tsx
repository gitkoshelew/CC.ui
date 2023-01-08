import { IncorrectAnswers } from '../../components/common/IncorrectAnswers/incorrectAnswers';
import { ResultTableData } from '../../Mocs/TableResultMoc';

export const Default = () => (
  <IncorrectAnswers IncorrectAnswersList={ResultTableData} />
);
export default {
  title: 'Organism/IncorrectAnswer',
  component: Default,
};

import { IDataOptions } from '../Types/TestQuestionsType';

export const getCheckedAnswers = (checkedData: IDataOptions[]) =>
  checkedData?.filter((e) => e.isChecked).map((e) => e.label);

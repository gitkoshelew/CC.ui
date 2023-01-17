import { instance } from './Instance/instance';
import { TestQuestionsType } from '../Types/TestQuestionsType';

export const questionsApi = {
  getQuestions() {
    return instance.get<TestQuestionsType[]>(`questions`);
  },
};

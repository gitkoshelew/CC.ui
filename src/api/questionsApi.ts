import { instance } from './Instance/instance';
import { TestQuestionsType } from '../types/TestQuestionsType';

export const questionsApi = {
  getQuestions() {
    return instance.get<TestQuestionsType[]>(`questions`);
  },
};

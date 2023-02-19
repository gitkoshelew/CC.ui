import { instance } from './Instance/instance';
import { NewQuestionType, TestQuestionsType } from '../Types/TestQuestionsType';

export const questionsApi = {
  getQuestions() {
    return instance.get<TestQuestionsType[]>(`questions`);
  },
  getOneCard(quizId: number) {
    return instance.get<NewQuestionType>(`questions/${quizId}`);
  },
};

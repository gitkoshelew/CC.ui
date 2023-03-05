import { instance } from './Instance/instance';
import { NewQuestionType } from '../types/TestQuestionsType';

export const questionsApi = {
  getQuestions() {
    return instance.get<NewQuestionType[]>(`questions`);
  },
  getOneCard(quizId: number) {
    return instance.get<NewQuestionType>(`questions/${quizId}`);
  },
};

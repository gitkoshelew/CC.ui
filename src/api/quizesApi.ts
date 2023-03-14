import { instance } from './Instance/instance';
import { CardType } from '../types/CardTypes';

export const quizesApi = {
  getQuizzes() {
    return instance.get<CardType[]>(`quiz`);
  },
  getQuiz(cardId: number) {
    return instance.get<CardType>(`quiz/${cardId}`);
  },
  postQuizzes() {
    return instance.post<CardType[]>('quiz', {
      title: 'Test about Node.Js',
      userName: 'Nikita',
    });
  },
};

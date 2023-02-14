import { instance } from './Instance/instance';
import { CardsType, QuizesType } from '../Types/CardTypes';

export const quizesApi = {
  getQuizes() {
    return instance.get<CardsType[]>(`quiz`);
  },
  postQuizes() {
    return instance.post<QuizesType[]>('quizzes', {
      title: 'Test about Node.Js',
      userName: 'Nikita',
    });
  },
};

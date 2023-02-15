import { instance } from './Instance/instance';
import { CardsType } from '../Types/CardTypes';

export const quizesApi = {
  getQuizes() {
    return instance.get<CardsType[]>(`quiz`);
  },
  postQuizes() {
    return instance.post<CardsType[]>('quiz', {
      title: 'Test about Node.Js',
      userName: 'Nikita',
    });
  },
};

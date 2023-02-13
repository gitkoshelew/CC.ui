import { instance } from './Instance/instance';
import { QuizesType } from '../Types/CardTypes';

export const quizesApi = {
  getQuizes() {
    return instance.get<QuizesType[]>(`quizzes/`);
  },
  postQuizes() {
    return instance.post<QuizesType[]>('quizzes', {
      title: 'Test about Node.Js',
      userName: 'Nikita',
    });
  },
};

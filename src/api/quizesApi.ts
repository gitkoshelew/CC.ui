import { instance } from './Instance/instance';
import { QuizesType } from '../components/common/types';

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

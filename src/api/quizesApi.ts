import { instance } from './Instance/instance';
import { QuizType } from '../components/common/types';

export const quizesApi = {
  getQuizes() {
    return instance.get<QuizType[]>(`quizzes/`);
  },
  postQuizes() {
    return instance.post<QuizType[]>('quizzes', {
      title: 'Test about Node.Js',
      userName: 'Nikita',
    });
  },
};

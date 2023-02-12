import { instance } from './Instance/instance';
import { QuizesType } from '../components/common/types';

export const quizesApi = {
  getQuizes() {
    return instance.get(`quiz/`);
  },
  postQuizes() {
    return instance.post<QuizesType[]>('quizzes', {
      title: 'Test about Node.Js',
      userName: 'Nikita',
    });
  },
};

import { instance } from './Instance/instance';
import { QuizType } from '../components/common/types';

export const quizzesApi = {
  getQuizzes() {
    return instance.get<QuizType[]>(`quizzes/`);
  },
  postQuizzes() {
    return instance.post<QuizType[]>('quizzes', {
      title: 'Test about Node.Js',
      userName: 'Nikita',
    });
  },
};

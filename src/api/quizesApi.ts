import { FieldValues } from 'react-hook-form';
import { instance } from './Instance/instance';
import { QuizesType } from '../components/common/types';

export const quizesApi = {
  getQuizes() {
    return instance.get<QuizesType[]>(`quizzes/`);
  },
  postQuizes(data:FieldValues) {
    return instance.post<FieldValues>('quizzes', data);
  },
};

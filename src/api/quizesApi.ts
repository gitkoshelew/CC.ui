import { FieldValues } from 'react-hook-form';
import { instance } from './Instance/instance';
import { CardsType } from '../Types/CardTypes';

export const quizesApi = {
  getQuizes() {
    return instance.get<CardsType[]>(`quiz`);
  },
  postQuizes(data:FieldValues) {
    return instance.post<FieldValues>('quizzes', data);
  },
};

import { FieldValues } from 'react-hook-form';
import { instance } from './Instance/instance';
import { CardsType } from '../Types/CardTypes';

export type CreateQuestionFieldType = {
  title: string;
  description: string;
  topicId: number;
};
export const quizesApi = {
  getQuizes() {
    return instance.get<CardsType[]>(`quiz`);
  },
  postQuizes(data: FieldValues) {
    return instance.post<FieldValues>('quiz', data);
  },
  postQuestion(questionData: FieldValues) {
    return instance.post<FieldValues>('questions', questionData);
  },
};

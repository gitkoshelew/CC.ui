import { FieldValues } from 'react-hook-form';
import { instance } from './Instance/instance';
import { CardType } from '../types/CardTypes';
import { CreateQuizType } from '../types/CreateQuizType';

export const quizesApi = {
  getQuizzes() {
    return instance.get<CardType[]>(`quiz`);
  },
  postQuizes(quizData: CreateQuizType) {
    return instance.post<CreateQuizType>('quiz', quizData);
  },
  postQuestion(questionData: FieldValues) {
    return instance.post<FieldValues>('questions', questionData);
  },
};

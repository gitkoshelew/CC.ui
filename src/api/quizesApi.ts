import { FieldValues } from 'react-hook-form';
import { instance } from './Instance/instance';
import { CardsType } from '../Types/CardTypes';
import { CreateQuizType } from "../Types/CreateQuizType";

export const quizesApi = {
  getQuizes() {
    return instance.get<CardsType[]>(`quiz`);
  },
  postQuizes(quizData: CreateQuizType) {
    return instance.post<CreateQuizType>('quiz', quizData);
  },
  postQuestion(questionData: FieldValues) {
    return instance.post<FieldValues>('questions', questionData);
  },
};

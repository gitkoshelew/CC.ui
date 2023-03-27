import { FieldValues } from 'react-hook-form';
import axios from 'axios';
import { instance } from './Instance/instance';
import { CardType } from '../types/CardTypes';
import { CreateQuizType, TopicType } from '../types/CreateQuizType';

export const quizesApi = {
  getQuizzes() {
    return instance.get<CardType[]>(`quiz`);
  },
  getQuiz(cardId: number) {
    return instance.get<CardType>(`quiz/${cardId}`);
  },
  postQuizes(quizData: {
    topicId: axios.AxiosResponse<any> | number;
    description: string;
    comment: string;
    numberOfQuestions: null;
    id?: number;
    title: string;
  }) {
    return instance.post<CreateQuizType>('quiz', quizData);
  },
  postQuestion(questionData: FieldValues) {
    return instance.post<FieldValues>('questions', questionData);
  },
  postTopic(title: string) {
    return instance.post<TopicType>(`/topic`, { title });
  },
};

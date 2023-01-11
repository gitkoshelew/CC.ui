import { instance } from './Instance/instance';

export const quizesApi = {
  getQuizes() {
    return instance.get<QuizesType[]>(`quizzes`);
  },
};

export type QuizesType = {
  id: number;
  title: string;
  userName: string;
  date: string;
  status: string;
};

import { instance } from './Instance/instance';

export const quizesApi = {
  getQuizes() {
    return instance.get<any>(`quizzes`);
  },
};

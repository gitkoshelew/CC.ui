import { resultData } from '../types/liveCodingTypes';
import { instance } from './Instance/instance';

export const resultApi = {
  postResult() {
    return instance.post<resultData[]>(`result`);
  },
};

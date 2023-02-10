import { instance } from './Instance/instance';

export const authApi = {
  registration(data: RegistrationType) {
    return instance.post<RegistrationType>('/auth/registration', data);
  },
  logIn(data: LogInType) {
    return instance.post('/auth/login', data);
  },
};

export type RegistrationType = {
  name: string;
  email: string;
  password: string;
  nickname: string;
};

export type LogInType = {
  email: string;
  password: string;
};

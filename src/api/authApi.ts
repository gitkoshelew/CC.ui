import { instance } from './Instance/instance';

export const authApi = {
  registration(data: RegistrationType) {
    return instance.post<RegistrationType>('/auth/registration', data);
  },
};

export type RegistrationType = {
  name: string;
  email: string;
  password: string;
  nickname: string;
};

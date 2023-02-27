import { instance } from './Instance/instance';
import { LoginFormType, RegistrationFormType } from '../types/AuthTypes';

export const authApi = {
  registration(data: RegistrationFormType) {
    return instance.post('/auth/registration', data);
  },
  logIn(data: LoginFormType) {
    return instance.post('/auth/login', data);
  },
  authMe() {
    return instance.get('/auth/me');
  },
};

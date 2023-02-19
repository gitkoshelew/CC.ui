import { instance } from './Instance/instance';
import { LoginFormType, RegistrationFormType } from '../Types/AuthTypes';

export const authApi = {
  registration(data: RegistrationFormType) {
    return instance.post('/auth/registration', data);
  },
  logIn(data: LoginFormType) {
    return instance.post('/auth/login', data);
  },
};

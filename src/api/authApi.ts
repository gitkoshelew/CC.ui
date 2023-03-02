import { instance } from './Instance/instance';
import { RegistrationType } from '../Types/types';

export const authApi = {
  registration(data: RegistrationType) {
    return instance.post('/auth/registration', data);
  },
};

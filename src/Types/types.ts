import { ReactNode } from 'react';

export type WithChild = {
  children?: ReactNode;
};
export type RegistrationType = {
  name: string;
  email: string;
  password: string;
  nickname: string;
};

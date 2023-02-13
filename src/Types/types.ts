import { ReactNode } from 'react';

export type WithChild = {
  children?: ReactNode;
};

type QuizesType = {
  id: number;
  title: string;
  userName: string;
  date: string;
  status: string | null;
};

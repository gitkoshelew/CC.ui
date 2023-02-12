import { ReactNode } from 'react';

export type WithChild = {
  children?: ReactNode;
};

export type QuizesType = {
  id: number;
  title: string;
  authorId: number;
};

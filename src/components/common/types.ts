import { ReactNode } from 'react';

export type WithChild = {
  children?: ReactNode;
};

// <Remark>
// Naming should be consistent.
// if type is singular, then use QuizType
// if plural(array), then QuizTypes
// if plural form of naming, then QuizzesType (which is very rare case)

export type QuizType = {
  id: number;
  title: string;
  userName: string;
  date: string;
  status: string | null;
};

import { NewQuestionType } from './TestQuestionsType';

export type CardType = {
  id: number;
  title: string;
  description: string;
  authorId: number;
  author: AuthorType;
  question: NewQuestionType[];
};

export type AuthorType = {
  id: number;
  name: string;
  surname: string;
  email: string;
  nickname: string;
  password: string;
  status: string | null;
};

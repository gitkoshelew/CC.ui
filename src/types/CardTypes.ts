import { TestQuestionsType } from './TestQuestionsType';

export type CardsType = {
  id: number;
  title: string;
  authorId: number;
  author: AuthorType;
  question: TestQuestionsType[];
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

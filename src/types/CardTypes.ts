import { NewQuestionType, TopicType } from './TestQuestionsType';

export type CardType = {
  id: number;
  title: string;
  comment: string;
  creationDate: string;
  description: string;
  authorId: number;
  author: AuthorType;
  topic: TopicType;
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

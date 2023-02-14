export type QuizesType = {
  id: number;
  title: string;
  authorId: number;
};
export type CardsType = {
  id: number;
  title: string;
  authorId: number;
  author: AuthorType;
  question: [];
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

export type CardsType = {
  id: number;
  title: string;
  description: string;
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

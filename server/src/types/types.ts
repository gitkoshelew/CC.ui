export type QuizDto = {
  title: string;
  userName: string;
};

export type QuizViewModel = {
  id: number;
  title: string;
  userName: string;
  date: Date | string;
  status: null | string;
};

export type DBModel = {
  quizzes: QuizViewModel[];
};

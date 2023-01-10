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
  questions: QuestionViewModel[];
};

export type QuestionDto = {
  title: string;
  question: string;
  content: AnswerOptions[];
  type: string;
  difficulty: string;
  description: string;
  correctAnswer: string;
  topic: string;
};

export type QuestionViewModel = {
  id: number;
  title: string;
  content: AnswerOptions;
  type: string;
  difficulty: string;
  description: string;
  correctAnswer: string;
  topic: string;
};
export type AnswerOptions = {
  options: string[]
};

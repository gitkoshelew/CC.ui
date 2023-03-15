export type CreateQuestionType = {
  title: string;
  content: Content;
  type: string;
  difficulty: string;
  description: string;
  topicId: number;
  timer: number;
  numberOfQuestions: number;
};

export type Content = {
  options: string[];
  correctAnswer: string[];
};

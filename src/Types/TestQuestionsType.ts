export type TestQuestionsType = {
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
  options: string[];
};

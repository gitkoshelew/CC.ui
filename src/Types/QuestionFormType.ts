export type QuestionFormType = {
  numberOfQuestion: number;
  title: string;
  content: ContentType;
  type: 'single' | 'multi';
  difficulty: 'light' | 'medium' | 'hard';
  description: string;
  timer: number;
  theme: string;
};

export type ContentType = {
  options: string[];
  correctAnswer: string[];
};

export type CreateQuestionFieldType = {
  title: string;
  description: string;
  minutes: number;
  seconds: number;
  options: { option: string }[];
  topicId: number;
  difficulty: string;
  type: string;
};

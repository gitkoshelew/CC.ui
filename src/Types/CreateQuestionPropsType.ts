export type CreateQuestionPropsType = {
  onSaveQuestion: (values: SaveQuestionValuesType) => void;
  currentQuestion: questionType;
  numberOfQuestions: number;
  currentQuestionIndex: number;
  onPressCurrentQuestionPressed: (value: number) => void;
};

export type SaveQuestionValuesType = {
  valuesFields: CreateQuestionFieldType;
  correctAnswers: string[];
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
export type questionType = {
  id: number;
  title: string;
  description: string;
  content: answersType;
  difficulty: Difficulty;
  timer: number;
  type: TypeOptions;
  topicId: number;
  moderationId: null;
  // Quiz_Question: {
  //   id: 1;
  //   quizId: 25;
  //   questionId: 2;
  // }
};

export enum Difficulty {
  Easy = 'light',
  Medium = 'medium',
  Hard = 'hard',
}

export type answersType = {
  options: string[];
  correctAnswer: string[];
};

export enum TypeOptions {
  single = 'single',
  multi = 'multi',
}

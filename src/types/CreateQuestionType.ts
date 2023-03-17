export type CreateQuestionType = {
  title: string;
  options: [];
  content: {
    options: [];
    correctAnswer: [];
  };
  type: string;
  difficulty: string;
  description: string;
  topicId: number;
  timer: number;
  timerquestion: {
    minutes: string;
    seconds: string;
  };
};

export type Content = {
  options: string[];
  correctAnswer: string[];
};

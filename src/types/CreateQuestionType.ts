export type CreateQuestionType = {
  title: string;
  options: any;
  content: {
    options: any;
    correctAnswer: any;
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

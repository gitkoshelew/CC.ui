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

export type NewQuestionType = {
  id: number;
  title: string;
  content: ContentType;
  type: TypeOptions;
  difficulty: string;
  description: string;
  timer: number;
  topicId: number;
  moderationId: number;
  topic: TopicType;
  moderation: ModerationType;
  quiz: [];
};
export type ContentType = {
  options: string[];
  correctAnswer: string[];
};
export type TopicType = {
  id: number;
  title: string;
};
export type ModerationType = {
  id: number;
  comment: string;
  status: string;
};
export enum TypeOptions {
  single = 'single',
  multi = 'multi',
}
export type ResultType = {
  id: number;
  questionStatus: 'default' | 'active' | 'right' | 'error';
  answer: string;
};
export type IDataOptions = {
  label: string;
  value: number;
  isChecked: boolean;
};

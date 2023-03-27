export type CreateQuizType = {
  title: string;
  description: string;
  comment: string;
  topicId: number;
  numberOfQuestions: number;
  id?: number;
};
export type TopicType = {
  id?: number;
  title: string;
};

import { db } from '../repositories/db';
import { QuestionDto, QuestionViewModel } from '../types/types';

export const questionsService = {
  findAllQuestions() {
    return db.questions;
  },

  findQuestionById(questionId: number) {
    return db.questions.find((c) => c.id === questionId);
  },

  createNewQuestion(questionDto: QuestionDto) {
    const newQuestion: QuestionViewModel = {
      id: Number(new Date()),
      title: questionDto.title,
      question: questionDto.question,
      content: questionDto.content,
      type: questionDto.type,
      difficulty: questionDto.difficulty,
      description: questionDto.description,
      topic: questionDto.topic,
    };
    db.questions.push(newQuestion);
    return newQuestion;
  },

  deleteQuestionById(questionId: number) {
    const findQuestionById = this.findQuestionById(questionId);
    if (!findQuestionById) return false;
    db.questions = db.questions.filter((q) => q.id !== questionId);
    return true;
  },
};

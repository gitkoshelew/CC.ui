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
    const answerArray = [];
    for (const answer in questionDto.content) {
      answerArray.push(questionDto.content[answer]);
    }
    const newQuestion: QuestionViewModel = {
      id: Number(new Date()),
      title: questionDto.title,
      content: {
        options: answerArray,
      },
      type: questionDto.type,
      difficulty: questionDto.difficulty,
      description: questionDto.description,
      correctAnswer: questionDto.correctAnswer,
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

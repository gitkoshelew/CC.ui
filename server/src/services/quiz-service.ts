import { QuizDto, QuizViewModel } from '../types/types';
import { db } from '../repositories/quiz-repository';

export const quizService = {
  findAllQuizzes() {
    return db.quizzes;
  },

  findQuizById(quizId: number) {
    return db.quizzes.find((c) => c.id === quizId);
  },

  createNewQuiz(quizDto: QuizDto) {
    const newQuiz: QuizViewModel = {
      id: Number(new Date()),
      title: quizDto.title,
      userName: quizDto.userName,
      date: new Date(),
      status: null,
    };
    db.quizzes.push(newQuiz);
    return newQuiz;
  },

  updateQuizById(quizId: number, quizDto: QuizDto) {
    const findQuizById = this.findQuizById(quizId);
    if (!findQuizById) return false;
    findQuizById.title = quizDto.title;
    findQuizById.userName = quizDto.userName;
    return true;
  },

  deleteQuizById(quizId: number) {
    const findQuizById = this.findQuizById(quizId);
    if (!findQuizById) return false;
    db.quizzes = db.quizzes.filter((q) => q.id !== quizId);
    return true;
  },
};

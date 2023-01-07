import { Request, Response, Router } from 'express';
import { quizService } from '../services/quiz-service';
import { quizError } from '../errors/error';
import { quizValidation } from '../middlewares/express-validator-middleware';
import { QuizDto } from '../types/types';

export const quizRouter = Router({});

quizRouter.get('/', (req: Request, res: Response) => {
  const findAllQuizzes = quizService.findAllQuizzes();
  setTimeout(() => res.status(200).send(findAllQuizzes), 1000);
});

quizRouter.get('/:id', (req: Request, res: Response) => {
  const quizId: number = +req.params.id;

  const findQuizById = quizService.findQuizById(quizId);
  if (!findQuizById) res.status(404).send(quizError);
  setTimeout(() => res.status(200).send(findQuizById), 1000);
});

quizRouter.post('/', quizValidation, (req: Request, res: Response) => {
  const quizDto: QuizDto = req.body;

  const createNewQuiz = quizService.createNewQuiz(quizDto);
  setTimeout(() => res.status(201).send(createNewQuiz), 1000);
});

quizRouter.put('/:id', (req: Request, res: Response) => {
  const quizId: number = +req.params.id;
  const quizDto: QuizDto = req.body;

  const updateQuizById = quizService.updateQuizById(quizId, quizDto);
  if (!updateQuizById) return res.status(404).send(quizError);
  setTimeout(() => res.sendStatus(204), 1000);
});

quizRouter.delete('/:id', (req: Request, res: Response) => {
  const quizId = +req.params.id;
  const deleteQuizById = quizService.deleteQuizById(quizId);
  if (!deleteQuizById) return res.status(404).send(quizError);
  setTimeout(() => res.sendStatus(204), 1000);
});

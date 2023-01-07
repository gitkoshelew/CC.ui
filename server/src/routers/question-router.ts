import { Request, Response, Router } from 'express';
import { questionsService } from '../services/question-service';
import { questionError, quizError } from '../errors/error';
import { QuestionDto } from '../types/types';
import { questionValidation } from '../middlewares/express-validator-middleware';

export const questionRouter = Router();

questionRouter.get('/', (req: Request, res: Response) => {
  const findAllQuestions = questionsService.findAllQuestions();
  setTimeout(() => res.status(200).send(findAllQuestions), 1000);
});

questionRouter.get('/:id', (req: Request, res: Response) => {
  const questionId: number = +req.params.id;

  const findQuestionById = questionsService.findQuestionById(questionId);
  if (!findQuestionById) res.status(404).send(questionError);
  setTimeout(() => res.status(200).send(findQuestionById), 1000);
});

questionRouter.post('/', questionValidation, (req: Request, res: Response) => {
  const questionDto: QuestionDto = req.body;

  const createNewQuestion = questionsService.createNewQuestion(questionDto);
  setTimeout(() => res.status(201).send(createNewQuestion), 1000);
});

questionRouter.delete('/:id', (req: Request, res: Response) => {
  const questionId = +req.params.id;
  const deleteQuestionById = questionsService.deleteQuestionById(questionId);
  if (!deleteQuestionById) return res.status(404).send(quizError);
  setTimeout(() => res.sendStatus(204), 1000);
});

import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const expressValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errorsMessages: errors
        .array({ onlyFirstError: true })
        .map((e) => ({ message: e.msg, field: e.param })),
    });
  }
  next();
};

const quizTitleValidation = body('title').trim().isLength({ min: 1, max: 40 });

const quizUserNameValidation = body('userName')
  .trim()
  .isLength({ min: 1, max: 40 });

export const quizValidation = [
  quizTitleValidation,
  quizUserNameValidation,
  expressValidator,
];

const questionTitleValidation = body('title')
  .trim()
  .isLength({ min: 1, max: 100 });
const questionTypeValidation = body('type')
  .trim()
  .isLength({ min: 1, max: 100 });
const questionDifficultyValidation = body('difficulty')
  .trim()
  .isLength({ min: 1, max: 100 });
const questionDescriptionValidation = body('description')
  .trim()
  .isLength({ min: 1, max: 100 });
const questionTopicValidation = body('topic')
  .trim()
  .isLength({ min: 1, max: 100 });
const correctAnswerValidation = body('correctAnswer')
  .trim()
  .isLength({ min: 1, max: 100 });

export const questionValidation = [
  questionTitleValidation,
  questionTypeValidation,
  questionDifficultyValidation,
  questionDescriptionValidation,
  questionTopicValidation,
  expressValidator,
  correctAnswerValidation,
];

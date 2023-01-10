import express, { Request, Response } from 'express';
import cors from 'cors';
import { quizRouter } from './routers/quiz-router';
import { questionRouter } from './routers/question-router';

const PORT = process.env.PORT || 5005;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/quizzes', quizRouter);
app.use('/questions', questionRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Server is working!');
});

const startApp = () => {
  app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
};
startApp();


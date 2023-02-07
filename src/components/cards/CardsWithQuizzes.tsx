import { Card } from './Card/Card';
import { QuizType } from '../common/types';

type PropsCardsType = {
  // try not make any typos,
  // as it can be crucial for other developers
  quizzes?: QuizType[];
};

export const CardsWithQuizzes = ({ quizzes }: PropsCardsType) =>
  quizzes ? (
    <div className='grid gap-6 grid-cols-[repeat(auto-fill,minmax(270px,_1fr))]'>
      {quizzes.map(({ id, title, userName, date, status }: QuizType) => (
        <Card
          key={id}
          title={title}
          userName={userName}
          date={date}
          status={status}
        />
      ))}
    </div>
  ) : (
    <div>Карточек нет</div>
  );

import { Card } from './Card/Card';
import { CardType } from '../../types/CardTypes';

type PropsCardsType = {
  quizzes: CardType[];
};

export const CardsWithQuizes = ({ quizzes }: PropsCardsType) =>
  quizzes ? (
    <div className='grid gap-6 grid-cols-[repeat(auto-fill,minmax(270px,_1fr))]'>
      {quizzes.map(({ id, title, author, creationDate, comment }: CardType) => (
        <Card
          key={id}
          title={title}
          author={author}
          id={id}
          creationDate={creationDate}
          comment={comment}
        />
      ))}
    </div>
  ) : (
    <div>Карточек нет</div>
  );

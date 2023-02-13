import { Card } from './Card/Card';
import { OneCardType, QuizesType } from '../../Types/CardTypes';

type PropsCardsType = {
  quizes: QuizesType[];
};

export const CardsWithQuizes = (quizes: PropsCardsType) =>
  quizes ? (
    <div className='grid gap-6 grid-cols-[repeat(auto-fill,minmax(270px,_1fr))]'>
      {quizes.map(({ id, title, authorId }: OneCardType) => (
        <Card
          id={id}
          key={id}
          title={title}
          authorId={authorId}
          // userName={userName}
          // date={date}
          // status={status}
        />
      ))}
    </div>
  ) : (
    <div>Карточек нет</div>
  );

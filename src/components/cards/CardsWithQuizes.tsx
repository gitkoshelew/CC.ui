import { Card } from './Card/Card';
import { CardsType } from '../../types/CardTypes';

type PropsCardsType = {
  quizes: CardsType[];
};

export const CardsWithQuizes = ({ quizes }: PropsCardsType) =>
  quizes ? (
    <div className='grid gap-6 grid-cols-[repeat(auto-fill,minmax(270px,_1fr))]'>
      {quizes.map(({ id, title, author }: CardsType) => (
        <Card key={id} title={title} author={author} />
      ))}
    </div>
  ) : (
    <div>Карточек нет</div>
  );

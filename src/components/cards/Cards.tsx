import { FC } from 'react';
import { Card } from './Card/Card';
import { CardsType, OneCardType } from '../../Types/CardTypes';

type PropsCardsType = {
  cards: CardsType;
};

export const Cards: FC<PropsCardsType> = ({ cards }) =>
  cards ? (
    <div className='grid gap-6 grid-cols-[repeat(auto-fill,minmax(270px,_1fr))]'>
      {cards.map(({ id, title, userName, date, status }: OneCardType) => (
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

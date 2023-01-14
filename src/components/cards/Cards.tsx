import { FC } from 'react';
import { Card } from './Card/Card';

export const Cards: FC<{ cards: any }> = ({ cards }) => (
  <div className='grid gap-6 grid-cols-[repeat(auto-fill,minmax(270px,_1fr))]'>
    {!!cards.length &&
      cards.map((el) => (
        <Card
          key={el.id}
          title={el.title}
          userName={el.userName}
          date={el.date}
          status={el.status}
        />
      ))}
  </div>
);

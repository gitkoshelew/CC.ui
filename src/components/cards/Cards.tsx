import { useEffect, useState } from 'react';
import { Card } from './Card/Card';
import { OneCardType } from '../../Types/CardTypes';
import { quizesApi } from '../../api/quizesApi';

export const Cards = () => {
  const [cards, setCards] = useState<any>([]);

  useEffect(() => {
    quizesApi.getQuizes().then((res) => {
      setCards(res);
    });
  }, []);

  return cards ? (
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
};

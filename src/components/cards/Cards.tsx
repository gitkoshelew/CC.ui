import { useEffect, useState } from 'react';
import { Card } from './Card/Card';
import { OneCardType } from '../../Types/CardTypes';
import { quizesApi } from '../../api/as';

export const Cards = () => {
  const [cards, setCards] = useState<OneCardType[]>([
    {
      id: 1,
      title: 'General question about Node.js1',
      userName: 'Ivan',
      date: '010101',
      status: 'done',
    },
    {
      id: 2,
      title: 'General question about Node.js1',
      userName: 'Katya',
      date: '010101',
      status: 'done',
    },
  ]);

  useEffect(() => {
    quizesApi.getQuizes().then((res) => {
      setCards(res.data);
    });
  }, []);

  return (
    <div className='grid gap-6 grid-cols-[repeat(auto-fill,minmax(270px,_1fr))]'>
      {cards.map((el) => (
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
};

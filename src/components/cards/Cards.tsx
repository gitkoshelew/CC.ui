import { FC } from 'react';
import { Card } from './Card/Card';
import { CardsType, OneCardType } from '../../Types/CardTypes';
import styles from './Cards.module.css';

type PropsCardsType = {
  cards: CardsType;
};

export const Cards: FC<PropsCardsType> = ({ cards }) =>
  cards ? (
    <div className={styles.Cards}>
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

import { Card } from './Card/Card';
import { QuizesType } from '../common/types';

type PropsCardsType = {
  quizes?: QuizesType[];
};

export const CardsWithQuizes = ({ quizes }: PropsCardsType) =>
  quizes ? (
    <div className='grid gap-6 grid-cols-[repeat(auto-fill,minmax(270px,_1fr))]'>
      {quizes.map(({ id, title, authorId }: QuizesType) => (
        <Card key={id} title={title} authorId={authorId} />
      ))}
    </div>
  ) : (
    <div>Карточек нет</div>
  );

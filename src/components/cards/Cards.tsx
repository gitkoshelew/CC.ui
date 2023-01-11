import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './Card/Card';
import { CardsType, OneCardType } from '../../Types/CardTypes';
import { fetchQuizesAC } from '../../store/quizes-reducer';
import { AppState, wrapper } from '../../store/store';
import { quizesApi } from '../../api/quizesApi';

type PropsCardsType = {
  cards: CardsType;
};

export const Cards: FC<PropsCardsType> = ({ cards }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  const selectAuthState = (state: AppState) => state.quizzes.quizes;
  const carr = useSelector(selectAuthState);

  // console.log(makeStore().getState().quizzes.quizes);
  console.log('carr', carr);
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const res = await quizesApi.getQuizes();
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      store.dispatch(fetchQuizesAC(res.data));
      // console.log('State on server', store.getState());
      console.log('res', res);
      return {
        props: {
          // quizes: res.data,
        },
      };
    }
);

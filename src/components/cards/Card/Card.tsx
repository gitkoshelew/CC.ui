import { Button, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { AuthorType } from '../../../Types/CardTypes';
import { getOneCardTC } from '../../../store/reducers/questions-reducer';
import { useAppDispatch } from '../../../store/store';
import { getOneQuizesTC } from '../../../store/reducers/quizes-reducer';

type PropsCardType = {
  title: string;
  author: AuthorType;
  date?: number;
  id: number;
};

export const Card = ({
  title,
  author: { name, status },
  date,
  id,
}: PropsCardType) => {
  const { t } = useTranslation('home');
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(getOneQuizesTC(+id));
    push(`/${id}`);
  };

  return (
    <div className='flex flex-col text-center bg-background-paper shadow border rounded-2xl px-5 pt-11 pb-7 relative text-sm'>
      <div className='absolute -top-2 right-7 py-0.5 px-4 rounded-2xl text-xs font-light bg-secondary-main text-secondary-contrastText'>
        verified{status}
      </div>
      <div className='flex flex-col justify-between items-center h-full'>
        <Typography fontWeight={600} mb={3}>
          NodeJs
        </Typography>
        <div className='flex flex-col gap-1.5 justify-center mb-7'>
          <p className='m-0'>{title}</p>
          <p className='m-0'>
            <span className='text-text-primaryAlpha300'>By </span>
            {name}
          </p>
        </div>
        <div className='flex flex-col text-center items-center gap-4'>
          <Button onClick={onClickHandler}>{t('start')}</Button>
          {date && (
            <div>
              <span className='text-text-primaryAlpha300'>Created: </span>
              {date}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

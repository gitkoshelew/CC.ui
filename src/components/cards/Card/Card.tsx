import { Button, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import { useState } from 'react';
import { AuthorType } from '../../../types/CardTypes';
import { useAppDispatch } from '../../../store/store';
import { getOneQuizes } from '../../../store/reducers/quizzes-reducer';
import { clearStateResult } from '../../../store/reducers/result-reducer';

type PropsCardType = {
  title: string;
  author: AuthorType;
  id: number;
  creationDate: string;
  comment: string;
};

export const Card = ({
  title,
  author: { name, status },
  id,
  creationDate,
  comment,
}: PropsCardType) => {
  const { t } = useTranslation('home');
  const { push } = useRouter();
  const [disabled, setDisabled] = useState(false);
  const dispatch = useAppDispatch();
  const date = dayjs(creationDate).format('DD.MM.YYYY');
  const onClickHandler = async () => {
    dispatch(clearStateResult());
    setDisabled(true);
    await dispatch(getOneQuizes(+id));
    push(`/testPage/${id}`);
  };
  return (
    <div className='flex flex-col text-center bg-background-paper shadow border rounded-2xl px-5 pt-11 pb-7 relative text-sm'>
      <div className='absolute -top-2 right-7 py-0.5 px-4 rounded-2xl text-xs font-light bg-secondary-main text-secondary-contrastText'>
        verified{status}
      </div>
      <div className='flex flex-col justify-between items-center h-full'>
        <Typography fontWeight={600} mb={3}>
          {title}
        </Typography>
        <div className='flex flex-col gap-1.5 justify-center mb-7'>
          <p className='m-0'>{comment}</p>
          <p className='m-0'>
            <span className='text-text-primaryAlpha300'>By </span>
            {name}
          </p>
          <p className='m-0'>
            <span className='text-text-primaryAlpha300'>Created: </span>
            {date}
          </p>
        </div>
        <div className='flex flex-col text-center items-center gap-4'>
          <Button onClick={onClickHandler} disabled={disabled}>
            {t('start')}
          </Button>
        </div>
      </div>
    </div>
  );
};

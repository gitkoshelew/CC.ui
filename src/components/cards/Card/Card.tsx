import { FC } from 'react';
import { Button, Typography } from '@mui/material';

type PropsCardType = {
  title: string;
  userName: string;
  date: string;
  status: string | null;
};

export const Card: FC<PropsCardType> = ({ title, date, userName, status }) => (
  <div className='text-center bg-background-paper shadow border rounded-2xl px-5 pt-10 pb-2 relative'>
    {status && (
      <div
        className= 'absolute -top-3.5 right-5 py-1 px-7 rounded-2xl text-sm font-light bg-secondary-main text-secondary-contrastText'
      >
        verified
      </div>
    )}
    <div className='grid justify-items-center'>
      <Typography fontWeight='600'>NodeJs</Typography>
      <p className='mt-7 mb-1'>{title}</p>
      <p className='mt-0 mb-7'>
        <span className='text-text-primaryAlpha300'>By </span>
        {userName}
      </p>
      <Button href='#contained-buttons'>Start</Button>
      <p className='mb-8'>
        <span className='text-text-primaryAlpha300'>Created: </span>
        {date}
      </p>
    </div>
  </div>
);

import React, {FC} from 'react';
import {Button} from "@mui/material";

type PropsCardType = {
    title: string
    userName: string
    date: string
    status: string | null
}

export const Card: FC<PropsCardType> = ({title, date, userName, status}) => {

    return (
        <div className='border rounded-2xl shadowCard px-10 py-10 relative'>
            {status && <div className='border rounded-xl shadow-md absoluteCard px-5 bg-sky-400 text-white'>verifyed</div>}
            <div className='grid justify-items-center'>
                <h3>NodeJs</h3>
                <p>{title}</p>
                <p className='mt-0'><span className='text-slate-400'>By </span>{userName}</p>
                <Button  variant="contained" href="#contained-buttons">
                    Start
                </Button>
                <p><span className='text-slate-400'>Created: </span>{date}</p>
            </div>
        </div>)


};
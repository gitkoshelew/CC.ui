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
        <div className='border rounded-xl shadow-md px-10 pt-10 pb-10'>
            <div>{status && "verifyed"}</div>
            <div className='grid justify-items-center'>
                <h3 className='mb-10'>NodeJs</h3>
                <p>{title}</p>
                <p><span>By </span>{userName}</p>
                <Button className='my-10' variant="contained" href="#contained-buttons">
                    Start
                </Button>
                <p>Created:{date}</p>
            </div>
        </div>)


};
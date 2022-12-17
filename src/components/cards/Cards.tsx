import React from 'react';
import {Card} from "./Card/Card";


export type CardsType = OneCardType[]
export type OneCardType = {
    id: number
    title: string
    userName: string
    date: string
    status: string | null
}

export const Cards = () => {

    const cards: CardsType = [
        {id: 1, title: 'General question about Node.js1', userName: 'Person_1', date: "010101", status: "done"},
        {id: 2, title: 'General question about Node.js2', userName: 'Person_2', date: "020202", status: "done"},
        {id: 3, title: 'General question about Node.js3', userName: 'Person_3', date: "030101", status: "done"},
        {id: 4, title: 'General question about Node.js4', userName: 'Person_4', date: "040101", status: null},
        {id: 5, title: 'General question about Node.js5', userName: 'Person_5', date: "050101", status: null},
        {id: 6, title: 'General question about Node.js6', userName: 'Person_6', date: "060101", status: null},
        {id: 7, title: 'General question about Node.js7', userName: 'Person_7', date: "070101", status: "done"},
        {id: 8, title: 'General question about Node.js8', userName: 'Person_8', date: "080101", status: "done"},
    ]
    return (
        <div className='grid grid-cols-4 gap-20 px-20'>
            {cards.map(({id, title, userName, date, status}) =>
                <Card key={id} title={title} userName={userName} date={date} status={status}/>)}
        </div>
    );
};


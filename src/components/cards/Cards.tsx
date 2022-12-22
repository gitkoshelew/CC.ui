import React from 'react';
import {Card} from "./Card/Card";
import {cards} from "../../Mocs/Moc";

export const Cards = () => {

    return (
        <div className='grid grid-cols-4 gap-7'>
            {cards.map(({id, title, userName, date, status}) =>
                <Card key={id} title={title} userName={userName} date={date} status={status}/>)}
        </div>
    );
};


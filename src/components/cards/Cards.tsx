import React from 'react';
import {Card} from "./Card/Card";
import {cards} from "../../Mocs/Moc";
import s from "./Cards.module.css"

export const Cards = () => {

    return (
        <div className={s.Cards}>
            {cards.map(({id, title, userName, date, status}) =>
                <Card key={id} title={title} userName={userName} date={date} status={status}/>)}
        </div>
    );
};


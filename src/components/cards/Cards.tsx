import React, {FC} from 'react';
import {Card} from "./Card/Card";

import {CardsType, OneCardType} from "../../Types/CardTypes";

type PropsCardsType = {
cards: CardsType
}




export const Cards: FC<PropsCardsType> = ({cards}) => {


    return (
        <div className='grid grid-cols-4 gap-20 px-20'>
            {cards&&cards.map(({id, title, userName, date, status}:OneCardType) =>
                <Card key={id} title={title} userName={userName} date={date} status={status}/>)}
        </div>
    );
};


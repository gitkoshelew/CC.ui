import React, {FC} from 'react';
import {ResultTableDataType} from "../../../Mocs/TableResultMoc";
import {BasicTable} from "./BasicTable";

type IncorrectAnswerPropsType = {
    IncorrectAnswers: ResultTableDataType[]
}

 export const IncorrectAnswers: FC<IncorrectAnswerPropsType> = ({IncorrectAnswers}) => {
    return (
        <div>
            <BasicTable IncorrectAnswers={IncorrectAnswers}/>
        </div>
    );
};

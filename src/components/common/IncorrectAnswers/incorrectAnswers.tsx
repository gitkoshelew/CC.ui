import React, { FC } from 'react';
import { ResultTableDataType } from '../../../Mocs/TableResultMoc';
import { BasicTable } from './BasicTable';

type IncorrectAnswerPropsType = {
  IncorrectAnswersList: ResultTableDataType[];
};

export const IncorrectAnswers: FC<IncorrectAnswerPropsType> = ({
  IncorrectAnswersList,
}) => <BasicTable IncorrectAnswersList={IncorrectAnswersList} />;

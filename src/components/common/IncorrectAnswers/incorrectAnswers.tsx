import React, { FC } from 'react';
import { ResultTableDataType } from '../../../Mocs/TableResultMoc';
import { BasicTable } from './BasicTable';

type IncorrectAnswerPropsType = {
  IncorrectAnswersList: ResultTableDataType[];
};

// <Remark>
// Name of the component is Inconsistent. Use Capitalized name

// <Remark>
// What does this extra functional component do?
// Only passes the same props to BasicTable. Why not use BasicTable directly?
export const IncorrectAnswers: FC<IncorrectAnswerPropsType> = ({
  IncorrectAnswersList,
}) => <BasicTable IncorrectAnswersList={IncorrectAnswersList} />;

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FC } from 'react';
import { ResultTableDataType } from '../../../Mocs/TableResultMoc';

type IncorrectAnswerPropsType = {
  IncorrectAnswersList: ResultTableDataType[];
};
export const BasicTable: FC<IncorrectAnswerPropsType> = ({
  IncorrectAnswersList,
}) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead
        sx={{
          backgroundSize: 'cover',
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          borderRadius: 2,
        }}
      >
        <TableRow>
          <TableCell
            sx={{
              color: 'primary.contrastText',
            }}
          >
            Question
          </TableCell>
          <TableCell
            sx={{
              color: 'primary.contrastText',
            }}
          >
            Incorrect Answer
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {IncorrectAnswersList.map((row) => (
          <TableRow key={row.id}>
            <TableCell component='th' scope='row'>
              {row.id}
            </TableCell>
            <TableCell>{row.incorrectAnswer}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

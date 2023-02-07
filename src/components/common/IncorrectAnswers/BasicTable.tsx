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
  <>
    <TableContainer component={Paper} className='my-10'>
      <Table
        sx={{
          bgcolor: 'primary.main',
        }}
      >
        <TableHead
          sx={{
            backgroundSize: 'cover',
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            borderRadius: 2,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <TableRow
            sx={{
              display: 'grid',
              gridTemplateColumns: '6fr 10fr',
            }}
          >
            <TableCell
              sx={{
                color: 'primary.contrastText',
                borderBottom: 'none',
              }}
            >
              Question
            </TableCell>
            <TableCell
              sx={{
                color: 'primary.contrastText',
                borderBottom: 'none',
              }}
            >
              Incorrect Answer
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
    <Table>
      <TableBody>
        {IncorrectAnswersList.map((row) => (
          <TableRow
            key={row.id}
            sx={{
              marginBottom: '20px',
              display: 'grid',
              gridTemplateColumns: '3fr 10fr',
            }}
          >
            <TableCell
              component='th'
              scope='row'
              sx={{
                borderBottom: 'none',
                bgcolor: 'background.paperAccent2',
                mx: 3,
                borderRadius: 1,
              }}
            >
              {row.id}
            </TableCell>
            <TableCell
              sx={{
                borderBottom: 'none',
                bgcolor: 'background.paperAccent2',
                mx: 3,
                borderRadius: 1,
              }}
            >
              {row.incorrectAnswer}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
);

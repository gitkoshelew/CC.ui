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
            gridTemplateColumns: '7fr 15fr',
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
              gridTemplateColumns: '1.5fr 10fr',
            }}
          >
            <div className='border-transparent rounded-3xl bg-background-paperAccent2 mr-24 ml-5'>
              <TableCell
                component='th'
                scope='row'
                sx={{
                  borderBottom: 'none',
                }}
              >
                {row.id}
              </TableCell>
            </div>
            <div className='border-transparent rounded-3xl bg-background-paperAccent2 w-full'>
              <TableCell
                sx={{
                  borderBottom: 'none',
                }}
              >
                {row.incorrectAnswer}
              </TableCell>
            </div>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
);

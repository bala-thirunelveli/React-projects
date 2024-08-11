import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(title, upVotes, date) {
  return { title, upVotes, date };
}

const rows = [
  createData('A Message to Our Customers', 12, '2020-11-24'),
  createData('Alphabet earrings', 2, '2019-11-23'),
  createData('Artificial Mountains', 8, '2010-11-21'),
  createData('Whats SAP', 8, '2010-11-21'),
  createData('The Emu War', 15, '2010-11-21'),
  createData('Scaling to 100k Users', 45, '2019-11-21'),
  createData('Simple text editor has 15k monthly users', 72, '2010-12-31'),
];

export default function CustomizedTables() {
  const [sortedRows, setSortedRows] = useState(rows);

  const handleSortByVotes = () => {
    const sorted = [...sortedRows].sort((a, b) => b.upVotes - a.upVotes);
    setSortedRows(sorted);
  };

  const handleSortByRecents = () => {
    const sorted = [...sortedRows].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedRows(sorted);
  };

  return (
    <div>
      <Stack spacing={2} direction="row" sx={{ padding: '20px', marginLeft: '500px' }}>
        <label><b>SORT BY</b></label>
        <Button variant="contained" onClick={handleSortByVotes}>By Votes</Button>
        <Button variant="contained" onClick={handleSortByRecents}>By Recents</Button>
      </Stack>
      <TableContainer component={Paper} style={{ margin: '40px', width: 'auto' }}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">UpVotes</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map((row) => (
              <StyledTableRow key={row.title}>
                <StyledTableCell component="th" scope="row">
                  {row.title}
                </StyledTableCell>
                <StyledTableCell align="right">{row.upVotes}</StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
 
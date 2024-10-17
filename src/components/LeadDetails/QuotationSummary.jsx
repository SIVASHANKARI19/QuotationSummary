import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TableHead from '@mui/material/TableHead';
import { Box } from '@mui/material';  // Import TableHead

const QuotationSummary = () => {
  // Sample data for the table
  const rows = [
    { description: 'Total Amount', qty: '3', amount: '$3,600.00' },
    { description: 'Total Discount', qty: '10%', amount: '- $100.00' },
    { description: 'Total Refundable', qty: '0%', amount: '$0' },
    { description: 'Total Tax', qty: '18%', amount: '$648.00' },
  ];

  const quoteAmount = "$4,148.00";

  return (
       <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",height:"100%"}}>
      <TableContainer component={Paper} sx={{ flexGrow: 1, boxShadow: 'none', border: 'none'   ,overflow:"hidden",width:"90%",height:"50vh",backgroundColor:"rgb(246,248,250)"}}>
        <Table sx={{ minWidth: 400, height: '100%'}} aria-label="quotation summary table">
          {/* Table Head for column titles */}
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body2" fontWeight="bold">
                  Description
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2" fontWeight="bold">
                  QTY
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2" fontWeight="bold">
                  Amount
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          {/* Table Body */}
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.description}>
                <TableCell component="th" scope="row">
                  <Typography variant="body2">{row.description}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body2">{row.qty}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body2">{row.amount}</Typography>
                </TableCell>
              </TableRow>
            ))}
            {/* Spacer row to push Quote Amount to the bottom */}
            <TableRow sx={{ height: '100%' }}>
              <TableCell colSpan={3} />
            </TableRow>
            {/* Row for Quote Amount */}
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell colSpan={2}>
                <Typography variant="body2" fontWeight="bold">
                  Quote Amount
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2" fontWeight="bold">
                  {quoteAmount}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
  );
};

export default QuotationSummary;

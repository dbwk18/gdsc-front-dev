import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@mui/material';
import incomeData from '../jsonFile/income.json';

const IncomeTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>출처</TableCell>
            <TableCell>항목</TableCell>
            <TableCell>코드</TableCell>
            <TableCell>예산</TableCell>
            <TableCell>결산</TableCell>
            <TableCell>집행률</TableCell>
            <TableCell>비고</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <>
            {incomeData.map(fundSource => (
              <>
                {fundSource.items.map(item => (
                  <TableRow>
                    <TableCell>{fundSource.fund_source}</TableCell>
                    <TableCell>{item.item}</TableCell>
                    <TableCell>{item.item_code}</TableCell>
                    <TableCell>{item.budget}</TableCell>
                    <TableCell>{item.settlement}</TableCell>
                    <TableCell>{item.execution_rate}</TableCell>
                    <TableCell>{item.remarks}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={3}>계</TableCell>
                  <TableCell>예산계</TableCell>
                  <TableCell>결산계</TableCell>
                  <TableCell>집행률계</TableCell>
                  <TableCell />
                </TableRow>
              </>
            ))}
            <TableRow>
              <TableCell colSpan={3}>총계</TableCell>
              <TableCell>총예산계</TableCell>
              <TableCell>총결산계</TableCell>
              <TableCell>총집행률</TableCell>
              <TableCell />
            </TableRow>
          </>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IncomeTable;

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@mui/material';
import incomeData from '../jsonfile/income.json';
import StyledTableCell from './StyledTableCell';
import { TextType } from '../core/GDSCText';

const IncomeTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell fontType={TextType.BOLD} text={'출처'} />
            <StyledTableCell fontType={TextType.BOLD} text={'항목'} />
            <StyledTableCell fontType={TextType.BOLD} text={'코드'} />
            <StyledTableCell fontType={TextType.BOLD} text={'예산'} />
            <StyledTableCell fontType={TextType.BOLD} text={'결산'} />
            <StyledTableCell fontType={TextType.BOLD} text={'집행률'} />
            <StyledTableCell fontType={TextType.BOLD} text={'비고'} />
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

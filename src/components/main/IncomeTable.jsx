import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@mui/material';
import incomeData from '../jsonFile/income.json';
import StyledTableCell from './StyledTableCell';
import { TextType } from '../core/GDSCText';

const IncomeTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell text={'출처'} />
            <StyledTableCell text={'항목'} />
            <StyledTableCell text={'코드'} />
            <StyledTableCell text={'예산'} />
            <StyledTableCell text={'결산'} />
            <StyledTableCell text={'집행률'} />
            <StyledTableCell text={'비고'} />
          </TableRow>
        </TableHead>
        <TableBody>
          <>
            {incomeData.map(fundSource => (
              <>
                {fundSource.items.map(item => (
                  <TableRow>
                    <StyledTableCell size={13} text={fundSource.fund_source} />
                    <StyledTableCell size={10} text={item.item} />
                    <StyledTableCell size={13} text={item.item_code} />
                    <StyledTableCell size={13} text={`₩${item.budget}`} />
                    <StyledTableCell size={13} text={`₩${item.settlement}`} />
                    <StyledTableCell size={13} text={`${item.execution_rate}%`} />
                    <StyledTableCell size={13} text={item.remarks} />
                  </TableRow>
                ))}
                <TableRow>
                  <StyledTableCell size={10} fontType={TextType.BOLD} text={'계'} colSpan={3} />
                  <StyledTableCell size={13} fontType={TextType.BOLD} text={`₩${13000000}`} />
                  <StyledTableCell size={13} fontType={TextType.BOLD} text={`₩${11500000}`} />
                  <StyledTableCell size={13} fontType={TextType.BOLD} text={`${88.5}%`} />
                  <TableCell />
                </TableRow>
              </>
            ))}
            <TableRow>
              <StyledTableCell size={14} fontType={TextType.BOLD} text={'총계'} colSpan={3} />
              <StyledTableCell size={14} fontType={TextType.BOLD} text={`₩${15500000}`} />
              <StyledTableCell size={14} fontType={TextType.BOLD} text={`₩${14300000}`} />
              <StyledTableCell size={14} fontType={TextType.BOLD} text={`${92.3}%`} />
              <TableCell />
            </TableRow>
          </>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IncomeTable;

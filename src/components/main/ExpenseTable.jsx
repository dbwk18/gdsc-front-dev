import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@mui/material';
import expenseData from '../jsonFile/expense.json';
import StyledTableCell from './StyledTableCell';
import { TextType } from '../core/GDSCText';

const ExpenseTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell text={'담당'} />
            <StyledTableCell text={'소항목'} />
            <StyledTableCell text={'출처'} />
            <StyledTableCell text={'세부항목'} />
            <StyledTableCell text={'코드'} />
            <StyledTableCell text={'예산'} />
            <StyledTableCell text={'결산'} />
            <StyledTableCell text={'집행률'} />
            <StyledTableCell text={'비고'} />
          </TableRow>
        </TableHead>
        <TableBody>
          <>
            {expenseData.map(managerData => (
              <>
                {managerData.items.map(item => (
                  <>
                    {item.sub_items.map(subItem => (
                      <TableRow>
                        <StyledTableCell size={13} text={managerData.manager} />
                        <StyledTableCell size={10} text={item.item} />
                        <StyledTableCell size={13} text={subItem.fund_source} />
                        <StyledTableCell size={13} text={subItem.detail_item} />
                        <StyledTableCell size={13} text={subItem.item_code} />
                        <StyledTableCell size={13} text={`₩${subItem.budget}`} />
                        <StyledTableCell size={13} text={`₩${subItem.settlement}`} />
                        <StyledTableCell size={13} text={`${subItem.execution_rate}%`} />
                        <StyledTableCell size={13} text={subItem.remarks} />
                      </TableRow>
                    ))}
                  </>
                ))}
                <TableRow>
                  <StyledTableCell size={10} fontType={TextType.BOLD} text={'계'} colSpan={5} />
                  <StyledTableCell size={13} fontType={TextType.BOLD} text={`₩${13000000}`} />
                  <StyledTableCell size={13} fontType={TextType.BOLD} text={`₩${11500000}`} />
                  <StyledTableCell size={13} fontType={TextType.BOLD} text={`${88.5}%`} />
                  <TableCell />
                </TableRow>
              </>
            ))}
            <TableRow>
              <StyledTableCell size={14} fontType={TextType.BOLD} text={'총계'} colSpan={5} />
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

export default ExpenseTable;

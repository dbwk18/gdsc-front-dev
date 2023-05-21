import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@mui/material';
import expenseData from '../jsonFile/expense.json';

const ExpenseTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>담당</TableCell>
            <TableCell>소항목</TableCell>
            <TableCell>출처</TableCell>
            <TableCell>세부항목</TableCell>
            <TableCell>코드</TableCell>
            <TableCell>예산</TableCell>
            <TableCell>결산</TableCell>
            <TableCell>집행률</TableCell>
            <TableCell>비고</TableCell>
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
                        <TableCell>{managerData.manager}</TableCell>
                        <TableCell>{item.item}</TableCell>
                        <TableCell>{subItem.fund_source}</TableCell>
                        <TableCell>{subItem.detail_item}</TableCell>
                        <TableCell>{subItem.item_code}</TableCell>
                        <TableCell>{subItem.budget}</TableCell>
                        <TableCell>{subItem.settlement}</TableCell>
                        <TableCell>{subItem.execution_rate}</TableCell>
                        <TableCell>{subItem.remarks}</TableCell>
                      </TableRow>
                    ))}
                  </>
                ))}
                <TableRow>
                  <TableCell colSpan={5}>계</TableCell>
                  <TableCell>예산계</TableCell>
                  <TableCell>결산계</TableCell>
                  <TableCell>집행률계</TableCell>
                  <TableCell />
                </TableRow>
              </>
            ))}
            <TableRow>
              <TableCell colSpan={5}>총계</TableCell>
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

export default ExpenseTable;

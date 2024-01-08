import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@mui/material';
// import expenseData from '../../../data/BudgetExpenseToyData.json';
import StyledTableCell from './StyledTableCell';
import { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';

const ExpenseTable = ({ expenseData }) => {
  return (
    <TableContainer sx={{ maxHeight: 600, overflow: 'scroll' }}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell fontType={TextType.BOLD} text={'재원'} />
            <StyledTableCell fontType={TextType.BOLD} text={'예산분류'} />
            <StyledTableCell fontType={TextType.BOLD} text={'사업'} />
            <StyledTableCell fontType={TextType.BOLD} text={'예산과목'} />
            <StyledTableCell fontType={TextType.BOLD} text={'코드'} />
            <StyledTableCell fontType={TextType.BOLD} text={'예산'} />
            <StyledTableCell fontType={TextType.BOLD} text={'결산'} />
            <StyledTableCell fontType={TextType.BOLD} text={'집행률'} />
            <StyledTableCell fontType={TextType.BOLD} text={'비고'} />
          </TableRow>
        </TableHead>
        <TableBody>
          <>
            {expenseData.지출.map(
              managerData =>
                managerData.items.length !== 0 && (
                  <>
                    <TableRow>
                      <TableCell
                        rowSpan={
                          managerData.items.reduce(
                            (accumulator, currentValue) => accumulator + currentValue.items.length + 1,
                            0,
                          ) + 2
                        }
                      >
                        {managerData.재원}
                      </TableCell>
                    </TableRow>
                    {managerData.items.map(item => (
                      <>
                        <TableRow>
                          <TableCell rowSpan={item.items.length + 1}>{item.예산분류}</TableCell>
                        </TableRow>
                        {item.items.map(subitem => (
                          <TableRow>
                            <StyledTableCell size={10} text={subitem.사업} />
                            <StyledTableCell size={10} text={subitem.항목} />
                            <StyledTableCell size={13} text={subitem.코드} />
                            <StyledTableCell size={13} text={`₩${subitem.예산}`} />
                            <StyledTableCell size={13} text={`₩${subitem.결산}`} />
                            <StyledTableCell size={13} text={`${subitem.비율}%`} />
                            <StyledTableCell size={13} text={subitem.비고} />
                          </TableRow>
                        ))}
                      </>
                    ))}
                    {/* {managerData.items[0].items.map(item => (
                      <>
                        <TableRow>
                          <TableCell rowSpan={item.sub_items.length + 1}>{item.item}</TableCell>
                        </TableRow>
                        {item.sub_items.map(subItem => (
                          <TableRow>
                            <StyledTableCell size={10} text={item.사업} />
                            <StyledTableCell size={10} text={item.항목} />
                            <StyledTableCell size={13} text={item.코드} />
                            <StyledTableCell size={13} text={`₩${item.예산}`} />
                            <StyledTableCell size={13} text={`₩${item.결산}`} />
                            <StyledTableCell size={13} text={`${item.비율}%`} />
                            <StyledTableCell size={13} text={item.비고} />
                          </TableRow>
                        ))}
                      </>
                    ))} */}
                    <TableRow>
                      <StyledTableCell
                        size={10}
                        fontType={TextType.BOLD}
                        text={'계'}
                        colSpan={4}
                        backgroundColor={Colors.BLACK08}
                      />
                      <StyledTableCell
                        size={13}
                        fontType={TextType.BOLD}
                        text={`₩${managerData.지출소계.예산}`}
                        backgroundColor={Colors.BLACK08}
                      />
                      <StyledTableCell
                        size={13}
                        fontType={TextType.BOLD}
                        text={`₩${managerData.지출소계.결산}`}
                        backgroundColor={Colors.BLACK08}
                      />
                      <StyledTableCell
                        size={13}
                        fontType={TextType.BOLD}
                        text={`${managerData.지출소계.비율}%`}
                        backgroundColor={Colors.BLACK08}
                      />
                      <TableCell sx={{ backgroundColor: Colors.BLACK08 }} />
                    </TableRow>
                  </>
                ),
            )}
          </>
        </TableBody>
        <TableRow>
          <StyledTableCell
            size={14}
            fontType={TextType.BOLD}
            color={Colors.BLACK100}
            text={'총계'}
            colSpan={5}
            // backgroundColor={Colors.BLUE_DEEP}
          />
          <StyledTableCell
            size={14}
            fontType={TextType.BOLD}
            color={Colors.BLACK100}
            text={`₩${expenseData.지출총계.예산}`}
            // backgroundColor={Colors.BLUE_DEEP}
          />
          <StyledTableCell
            size={14}
            fontType={TextType.BOLD}
            color={Colors.BLACK100}
            text={`₩${expenseData.지출총계.결산}`}
            // backgroundColor={Colors.BLUE_DEEP}
          />
          <StyledTableCell
            size={14}
            fontType={TextType.BOLD}
            color={Colors.BLACK100}
            text={`${expenseData.지출총계.비율}%`}
            // backgroundColor={Colors.BLUE_DEEP}
          />
          {/* <TableCell sx={{ backgroundColor: Colors.BLUE_DEEP }} /> */}
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default ExpenseTable;

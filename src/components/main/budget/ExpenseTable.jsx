import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@mui/material';
import expenseData from '../../../data/BudgetExpenseToyData.json';
import StyledTableCell from './StyledTableCell';
import { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';

const ExpenseTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell fontType={TextType.BOLD} text={'담당'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell fontType={TextType.BOLD} text={'소항목'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell fontType={TextType.BOLD} text={'출처'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell fontType={TextType.BOLD} text={'세부항목'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell fontType={TextType.BOLD} text={'코드'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell fontType={TextType.BOLD} text={'예산'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell fontType={TextType.BOLD} text={'결산'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell fontType={TextType.BOLD} text={'집행률'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell fontType={TextType.BOLD} text={'비고'} backgroundColor={Colors.BLUE_LIGHT} />
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
                {managerData.total.map(item => (
                  <TableRow>
                    <StyledTableCell
                      size={10}
                      fontType={TextType.BOLD}
                      text={'계'}
                      colSpan={5}
                      backgroundColor={Colors.BLACK08}
                    />
                    <StyledTableCell
                      size={13}
                      fontType={TextType.BOLD}
                      text={`₩${item.budget}`}
                      backgroundColor={Colors.BLACK08}
                    />
                    <StyledTableCell
                      size={13}
                      fontType={TextType.BOLD}
                      text={`₩${item.settlement}`}
                      backgroundColor={Colors.BLACK08}
                    />
                    <StyledTableCell
                      size={13}
                      fontType={TextType.BOLD}
                      text={`${item.execution_rate}%`}
                      backgroundColor={Colors.BLACK08}
                    />
                    <TableCell sx={{ backgroundColor: Colors.BLACK08 }} />
                  </TableRow>
                ))}
              </>
            ))}

            {/* todo : backend data 구조 확인 후 수정 */}
            <TableRow>
              <StyledTableCell
                size={14}
                fontType={TextType.BOLD}
                color={Colors.WHITE100}
                text={'총계'}
                colSpan={5}
                backgroundColor={Colors.BLUE_DEEP}
              />
              <StyledTableCell
                size={14}
                fontType={TextType.BOLD}
                color={Colors.WHITE100}
                text={`₩${15500000}`}
                backgroundColor={Colors.BLUE_DEEP}
              />
              <StyledTableCell
                size={14}
                fontType={TextType.BOLD}
                color={Colors.WHITE100}
                text={`₩${14300000}`}
                backgroundColor={Colors.BLUE_DEEP}
              />
              <StyledTableCell
                size={14}
                fontType={TextType.BOLD}
                color={Colors.WHITE100}
                text={`${92.3}%`}
                backgroundColor={Colors.BLUE_DEEP}
              />
              <TableCell sx={{ backgroundColor: Colors.BLUE_DEEP }} />
            </TableRow>
          </>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpenseTable;

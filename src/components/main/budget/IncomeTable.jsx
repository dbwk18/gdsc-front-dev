import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@mui/material';
import incomeData from '../../jsonfile/income.json';
import StyledTableCell from './StyledTableCell';
import { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';

const IncomeTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell fontType={TextType.BOLD} text={'출처'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell fontType={TextType.BOLD} text={'항목'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell fontType={TextType.BOLD} text={'코드'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell fontType={TextType.BOLD} text={'예산'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell fontType={TextType.BOLD} text={'결산'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell fontType={TextType.BOLD} text={'집행률'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell fontType={TextType.BOLD} text={'비고'} backgroundColor={Colors.BLUE_LIGHT} />
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
                  <StyledTableCell
                    size={10}
                    fontType={TextType.BOLD}
                    text={'계'}
                    colSpan={3}
                    backgroundColor={Colors.BLACK08}
                  />
                  <StyledTableCell
                    size={13}
                    fontType={TextType.BOLD}
                    text={`₩${13000000}`}
                    backgroundColor={Colors.BLACK08}
                  />
                  <StyledTableCell
                    size={13}
                    fontType={TextType.BOLD}
                    text={`₩${11500000}`}
                    backgroundColor={Colors.BLACK08}
                  />
                  <StyledTableCell
                    size={13}
                    fontType={TextType.BOLD}
                    text={`${88.5}%`}
                    backgroundColor={Colors.BLACK08}
                  />
                  <TableCell sx={{ backgroundColor: Colors.BLACK08 }} />
                </TableRow>
              </>
            ))}
            <TableRow>
              <StyledTableCell
                size={14}
                fontType={TextType.BOLD}
                text={'총계'}
                color={Colors.WHITE100}
                colSpan={3}
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

export default IncomeTable;

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@mui/material';
import settlementData from '../../../data/BudgetTotalToyData.json';
import StyledTableCell from './StyledTableCell';
import { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';

const SettlementTabel = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ backgroundColor: Colors.BLUE_LIGHT }}> </TableCell>
            <StyledTableCell size={14} fontType={TextType.BOLD} text={'예산'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell size={14} fontType={TextType.BOLD} text={'결산'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell size={14} fontType={TextType.BOLD} text={'집행률'} backgroundColor={Colors.BLUE_LIGHT} />
          </TableRow>
        </TableHead>
        <TableBody>
          {settlementData.components.map(item =>
            item.type === '총계' ? (
              <TableRow>
                <StyledTableCell
                  size={14}
                  fontType={TextType.BOLD}
                  text={'총계'}
                  color={Colors.WHITE100}
                  colSpan={2}
                  backgroundColor={Colors.BLUE_DEEP}
                />
                <StyledTableCell
                  size={14}
                  fontType={TextType.BOLD}
                  color={Colors.WHITE100}
                  text={`₩${item.settlement}`}
                  backgroundColor={Colors.BLUE_DEEP}
                />
                <StyledTableCell
                  size={14}
                  fontType={TextType.BOLD}
                  color={Colors.WHITE100}
                  text={`${item.execute_rate}%`}
                  backgroundColor={Colors.BLUE_DEEP}
                />
              </TableRow>
            ) : (
              <TableRow>
                <StyledTableCell
                  size={14}
                  fontType={TextType.BOLD}
                  text={item.type}
                  backgroundColor={Colors.BLUE_LIGHT}
                />
                <StyledTableCell size={14} text={`₩${item.budget}`} />
                <StyledTableCell size={14} text={`₩${item.settlement}`} />
                <StyledTableCell size={14} text={`${item.execute_rate}%`} />
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SettlementTabel;

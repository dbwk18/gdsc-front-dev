import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@mui/material';
import SettlementJson from '../../jsonfile/settlement.json';
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
          {SettlementJson.components.map(item => (
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
          ))}
        </TableBody>
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
            text={`₩${-60000}`}
            backgroundColor={Colors.BLUE_DEEP}
          />
          <StyledTableCell
            size={14}
            fontType={TextType.BOLD}
            color={Colors.WHITE100}
            text={`${1000}%`}
            backgroundColor={Colors.BLUE_DEEP}
          />
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default SettlementTabel;

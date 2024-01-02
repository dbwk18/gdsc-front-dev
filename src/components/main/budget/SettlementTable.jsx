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
            <TableCell colSpan={2} sx={{ backgroundColor: Colors.BLUE_LIGHT }} />
            <StyledTableCell size={14} fontType={TextType.BOLD} text={'예산'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell size={14} fontType={TextType.BOLD} text={'결산'} backgroundColor={Colors.BLUE_LIGHT} />
            <StyledTableCell size={14} fontType={TextType.BOLD} text={'집행률'} backgroundColor={Colors.BLUE_LIGHT} />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell rowSpan={4}>총계</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>수입</TableCell>
            <TableCell>{settlementData.총계.수입.예산}</TableCell>
            <TableCell>{settlementData.총계.수입.결산}</TableCell>
            <TableCell>{settlementData.총계.수입.비율}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>지출</TableCell>
            <TableCell>{settlementData.총계.지출.예산}</TableCell>
            <TableCell>{settlementData.총계.지출.결산}</TableCell>
            <TableCell>{settlementData.총계.지출.비율}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>잔액</TableCell>
            <TableCell>{settlementData.총계.잔액.예산}</TableCell>
            <TableCell>{settlementData.총계.잔액.결산}</TableCell>
            <TableCell />
          </TableRow>

          {/* {Object.values(settlementData.총계).map(item =>
            item.type === '잔액' ? (
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
                <StyledTableCell size={14} text={`₩${item.예산}`} />
                <StyledTableCell size={14} text={`₩${item.결산}`} />
                <StyledTableCell size={14} text={`${item.비율}%`} />
              </TableRow>
            ),
          )} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SettlementTabel;

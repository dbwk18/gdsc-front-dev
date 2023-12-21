import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TableRow, TableCell, tableCellClasses, tableRowClasses } from '@mui/material';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';
import GDSCStatusButton from '../../core/GDSCStatusButton';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const StyledTableRow = styled(TableRow)(props => ({
  [`& > .MuiTableCell-root`]: {
    backgroundColor: props.rowHighlight ? Colors.BLUE_LIGHT : Colors.WHITE100,
    transition: 'background-color 0.5s ease',
  },
}));

const AccountRow = ({
  businessAt,
  manager,
  itemSub,
  itemCode,
  transactionType,
  income,
  expense,
  balance,
  transactionAt,
  bankName,
  accountHolder,
  accountNumber,
  receipts,
  remarks,
  highlight,
  page,
}) => {
  const [rowHighlight, setRowHighlight] = useState(false);

  useEffect(() => {
    setRowHighlight(highlight);
  }, [page]);

  useEffect(() => {
    setRowHighlight(highlight);
    const timeout = setTimeout(() => {
      setRowHighlight(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [highlight]);

  return (
    <StyledTableRow rowHighlight={rowHighlight}>
      <TableCell>
        <StyledDiv>
          <GDSCText size={13} color={Colors.GREY80}>
            {income}
          </GDSCText>
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          <GDSCText size={13} color={Colors.GREY80}>
            {expense}
          </GDSCText>
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          <GDSCText size={13} color={Colors.GREY80}>
            {balance}
          </GDSCText>
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          <GDSCText size={13} color={Colors.GREY80}>
            {transactionAt}
          </GDSCText>
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          <GDSCText size={10} color={Colors.GREY80}>
            ({bankName}-{accountHolder})
          </GDSCText>
        </StyledDiv>
        <StyledDiv>
          <GDSCText size={10} color={Colors.GREY80}>
            {accountNumber}
          </GDSCText>
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          <GDSCText size={13} color={Colors.GREY80}>
            {receipts}
          </GDSCText>
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          <GDSCText size={13} color={Colors.GREY80}>
            {remarks}
          </GDSCText>
        </StyledDiv>
      </TableCell>
    </StyledTableRow>
  );
};

export default AccountRow;

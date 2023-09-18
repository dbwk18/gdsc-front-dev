import React from 'react';
import styled from 'styled-components';
import { TableRow, TableCell, tableCellClasses } from '@mui/material';
import GDSCText from '../core/GDSCText';
import Colors from '../../style/Colors';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
}) => {
  return (
    <TableRow>
      <TableCell>
        <StyledDiv>
          <GDSCText size={13} color={Colors.GREY80}>
            {businessAt}
          </GDSCText>
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          <GDSCText size={13} color={Colors.GREY80}>
            {manager}
          </GDSCText>
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          <GDSCText size={10} color={Colors.GREY80}>
            {itemSub}
          </GDSCText>
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          <GDSCText size={13} color={Colors.GREY80}>
            {itemCode}
          </GDSCText>
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          <GDSCText size={13} color={Colors.GREY80}>
            {transactionType}
          </GDSCText>
        </StyledDiv>
      </TableCell>
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
    </TableRow>
  );
};

export default AccountRow;

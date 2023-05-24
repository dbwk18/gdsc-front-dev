import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import GDSCText from '../core/GDSCText';
import Colors from '../../style/Colors';

const AccountCell = ({
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
        <GDSCText size={13} color={Colors.GREY80}>
          {businessAt}
        </GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13} color={Colors.GREY80}>
          {manager}
        </GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={10} color={Colors.GREY80}>
          {itemSub}
        </GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13} color={Colors.GREY80}>
          {itemCode}
        </GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13} color={Colors.GREY80}>
          {transactionType}
        </GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13} color={Colors.GREY80}>
          {income}
        </GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13} color={Colors.GREY80}>
          {expense}
        </GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13} color={Colors.GREY80}>
          {balance}
        </GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13} color={Colors.GREY80}>
          {transactionAt}
        </GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={10} color={Colors.GREY80}>
          ({bankName}-{accountHolder})
        </GDSCText>
        <GDSCText size={10} color={Colors.GREY80}>
          {accountNumber}
        </GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13} color={Colors.GREY80}>
          {receipts}
        </GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13} color={Colors.GREY80}>
          {remarks}
        </GDSCText>
      </TableCell>
    </TableRow>
  );
};

export default AccountCell;

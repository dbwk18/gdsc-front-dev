import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import GDSCText from '../core/GDSCText';

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
        <GDSCText size={13}>{businessAt}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13}>{manager}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={10}>{itemSub}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13}>{itemCode}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13}>{transactionType}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13}>{income}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13}>{expense}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13}>{balance}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13}>{transactionAt}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={10}>
          ({bankName}-{accountHolder})
        </GDSCText>
        <GDSCText size={10}>{accountNumber}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13}>{receipts}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={13}>{remarks}</GDSCText>
      </TableCell>
    </TableRow>
  );
};

export default AccountCell;

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
  receipts,
  remarks,
}) => {
  return (
    <TableRow>
      <TableCell>
        <GDSCText size={14}>{businessAt}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={14}>{manager}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={14}>{itemSub}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={14}>{itemCode}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={14}>{transactionType}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={14}>{income}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={14}>{expense}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={14}>{balance}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={14}>{transactionAt}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={14}>{bankName}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={14}>{receipts}</GDSCText>
      </TableCell>
      <TableCell>
        <GDSCText size={14}>{remarks}</GDSCText>
      </TableCell>
    </TableRow>
  );
};

export default AccountCell;

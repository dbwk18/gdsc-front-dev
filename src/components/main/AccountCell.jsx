import React from 'react';
import { TableRow, TableCell } from '@mui/material';

const AccountCell = ({
  businessat,
  manager,
  itemsub,
  itemcode,
  transactiontype,
  income,
  expense,
  balance,
  transactionat,
  bankname,
  receipts,
  remarks,
}) => {
  return (
    <TableRow>
      <TableCell>{businessat}</TableCell>
      <TableCell>{manager}</TableCell>
      <TableCell>{itemsub}</TableCell>
      <TableCell>{itemcode}</TableCell>
      <TableCell>{transactiontype}</TableCell>
      <TableCell>{income}</TableCell>
      <TableCell>{expense}</TableCell>
      <TableCell>{balance}</TableCell>
      <TableCell>{transactionat}</TableCell>
      <TableCell>{bankname}</TableCell>
      <TableCell>{receipts}</TableCell>
      <TableCell>{remarks}</TableCell>
    </TableRow>
  );
};

export default AccountCell;

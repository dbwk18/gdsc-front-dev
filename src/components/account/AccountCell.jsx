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
        <div className="centered">
          <GDSCText size={13} color={Colors.GREY80}>
            {businessAt}
          </GDSCText>
        </div>
      </TableCell>
      <TableCell>
        <div className="centered">
          <GDSCText size={13} color={Colors.GREY80}>
            {manager}
          </GDSCText>
        </div>
      </TableCell>
      <TableCell>
        <div className="centered">
          <GDSCText size={10} color={Colors.GREY80}>
            {itemSub}
          </GDSCText>
        </div>
      </TableCell>
      <TableCell>
        <div className="centered">
          <GDSCText size={13} color={Colors.GREY80}>
            {itemCode}
          </GDSCText>
        </div>
      </TableCell>
      <TableCell>
        <div className="centered">
          <GDSCText size={13} color={Colors.GREY80}>
            {transactionType}
          </GDSCText>
        </div>
      </TableCell>
      <TableCell>
        <div className="centered">
          <GDSCText size={13} color={Colors.GREY80}>
            {income}
          </GDSCText>
        </div>
      </TableCell>
      <TableCell>
        <div className="centered">
          <GDSCText size={13} color={Colors.GREY80}>
            {expense}
          </GDSCText>
        </div>
      </TableCell>
      <TableCell>
        <div className="centered">
          <GDSCText size={13} color={Colors.GREY80}>
            {balance}
          </GDSCText>
        </div>
      </TableCell>
      <TableCell>
        <div className="centered">
          <GDSCText size={13} color={Colors.GREY80}>
            {transactionAt}
          </GDSCText>
        </div>
      </TableCell>
      <TableCell>
        <div className="centered">
          <GDSCText size={10} color={Colors.GREY80}>
            ({bankName}-{accountHolder})
          </GDSCText>
        </div>
        <div className="centered">
          <GDSCText size={10} color={Colors.GREY80}>
            {accountNumber}
          </GDSCText>
        </div>
      </TableCell>
      <TableCell>
        <div className="centered">
          <GDSCText size={13} color={Colors.GREY80}>
            {receipts}
          </GDSCText>
        </div>
      </TableCell>
      <TableCell>
        <div className="centered">
          <GDSCText size={13} color={Colors.GREY80}>
            {remarks}
          </GDSCText>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default AccountCell;

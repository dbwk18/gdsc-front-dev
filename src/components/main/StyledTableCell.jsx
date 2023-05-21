import React from 'react';
import { TableCell } from '@mui/material';
import GDSCText, { TextType } from '../core/GDSCText';
import Colors from '../../style/Colors';

const StyledTableCell = ({ size = 12, fontType = TextType.REGULAR, color = Colors.BLACK100, text }) => {
  return (
    <TableCell align="center">
      <GDSCText size={size} fontType={fontType} color={color}>
        {text}
      </GDSCText>
    </TableCell>
  );
};

export default StyledTableCell;

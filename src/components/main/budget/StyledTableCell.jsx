import React from 'react';
import { TableCell } from '@mui/material';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';
import styled from 'styled-components';

const CenteredTableCell = styled(TableCell)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTableCell = ({ size = 12, fontType = TextType.REGULAR, color = Colors.BLACK100, text, colSpan = 1 }) => {
  return (
    <CenteredTableCell colSpan={colSpan}>
      <GDSCText size={size} fontType={fontType} color={color}>
        {text}
      </GDSCText>
    </CenteredTableCell>
  );
};

export default StyledTableCell;

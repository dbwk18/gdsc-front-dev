import React from 'react';
import styled from 'styled-components';
import Colors from '../../../style/Colors';
import GDSCText from '../../core/GDSCText';
import { TableCell, tableCellClasses } from '@mui/material';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: Colors.BLUE_LIGHT,
    color: 'black',
  },
}));

const AccountChartHeader = ({ title }) => {
  return (
    <StyledTableCell>
      <div className="centered">
        <GDSCText size={12}>{title}</GDSCText>
      </div>
    </StyledTableCell>
  );
};

export default AccountChartHeader;

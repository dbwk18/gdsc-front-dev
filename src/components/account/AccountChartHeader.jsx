import React from 'react';
import styled from 'styled-components';
import Colors from '../../style/Colors';
import GDSCText from '../core/GDSCText';
import { TableRow, TableCell, tableCellClasses } from '@mui/material';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: Colors.BLUE_LIGHT,
    color: 'black',
  },
}));

const AccountChartHeader = ({ columnName }) => {
  return (
    <TableRow>
      {columnName.map(name => {
        return (
          <StyledTableCell>
            <div className="centered">
              <GDSCText size={12}>{name}</GDSCText>
            </div>
          </StyledTableCell>
        );
      })}
    </TableRow>
  );
};

export default AccountChartHeader;

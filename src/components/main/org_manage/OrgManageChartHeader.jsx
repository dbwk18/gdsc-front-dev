import React from 'react';
import styled from 'styled-components';
import Colors from '../../../style/Colors';
import GDSCText, { TextType } from '../../core/GDSCText';
import { TableRow, TableCell, tableCellClasses } from '@mui/material';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: Colors.WHITE100,
    color: 'black',
  },
}));

const OrgManageChartHeader = ({ columnName }) => {
  return (
    <TableRow>
      {columnName.map(name => {
        return (
          <StyledTableCell>
            <div className="centered">
              <GDSCText size={13} fontType={TextType.BOLD}>
                {name}
              </GDSCText>
            </div>
          </StyledTableCell>
        );
      })}
    </TableRow>
  );
};

export default OrgManageChartHeader;

import styled from 'styled-components';
import { TableRow, TableCell } from '@mui/material';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';
import GDSCStatusButton from '../../core/GDSCStatusButton';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const StyledTableRow = styled(TableRow)(props => ({
  [`& > .MuiTableCell-root`]: {
    backgroundColor: props.rowHighlight ? Colors.BLUE_LIGHT : Colors.WHITE100,
    transition: 'background-color 0.5s ease',
  },
}));

const OrgManageRow = ({ organisation, email, password, isDisabled }) => {
  return (
    <StyledTableRow>
      <TableCell>
        <StyledDiv>
          <GDSCText size={13} fontType={TextType.BOLD} color={Colors.GREY80}>
            {organisation}
          </GDSCText>
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          <GDSCText size={13} fontType={TextType.BOLD} color={Colors.GREY80}>
            {email}
          </GDSCText>
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          <GDSCText size={13} fontType={TextType.BOLD} color={Colors.GREY80}>
            {password}
          </GDSCText>
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          {isDisabled ? <GDSCStatusButton label={'비활성화'} /> : <GDSCStatusButton label={'활성화'} />}
        </StyledDiv>
      </TableCell>
    </StyledTableRow>
  );
};

export default OrgManageRow;

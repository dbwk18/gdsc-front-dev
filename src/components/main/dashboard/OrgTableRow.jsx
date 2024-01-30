import styled from 'styled-components';
import { TableRow, TableCell } from '@mui/material';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';
import GDSCStatusChip from '../../core/GDSCStatusChip';

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

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: white;
  border-radius: 16px;
  width: fit-content;
  height: fit-content;
`;

const OrgTableRow = ({ orgName, orgEmail, orgCardPDF, orgEditPermission, setIsModalOpen, setSelectedOrgName }) => {
  const handleChipClick = () => {
    if (!orgEditPermission) {
      setSelectedOrgName(orgName);
      setIsModalOpen(true);
    }
  };

  return (
    <StyledTableRow>
      <TableCell>
        <StyledDiv>
          <GDSCText size={13} fontType={TextType.BOLD} color={Colors.GREY80}>
            {orgName}
          </GDSCText>
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          <GDSCText size={13} fontType={TextType.BOLD} color={Colors.GREY80}>
            {orgEmail}
          </GDSCText>
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          {orgCardPDF ? (
            <GDSCText size={13} fontType={TextType.BOLD} color={Colors.GREY80}>
              {'제출됨'}
            </GDSCText>
          ) : (
            <GDSCText size={13} fontType={TextType.BOLD} color={Colors.GREY80}>
              {'미제출'}
            </GDSCText>
          )}
        </StyledDiv>
      </TableCell>
      <TableCell>
        <StyledDiv>
          <OrgButtonChip orgEditPermission={orgEditPermission} handleClick={handleChipClick} />
        </StyledDiv>
      </TableCell>
    </StyledTableRow>
  );
};

const OrgButtonChip = ({ orgEditPermission, handleClick }) => {
  return (
    <Button type="button" onClick={handleClick}>
      {orgEditPermission ? (
        <GDSCStatusChip label={'수정 가능'} />
      ) : (
        <GDSCStatusChip label={'권한 없음'} backgroundColor="#E9EAED" textColor="#223047" />
      )}
    </Button>
  );
};

export default OrgTableRow;

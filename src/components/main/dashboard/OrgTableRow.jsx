import styled from 'styled-components';
import { TableRow, TableCell } from '@mui/material';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';
import GDSCStatusChip from '../../core/GDSCStatusChip';
import { useEffect, useState } from 'react';
import { getForEntity } from '../../../network/HttpRequests';

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

const CardFileArea = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 12px 16px; */
  cursor: pointer;
`;

const OrgTableRow = ({
  orgId,
  orgName,
  orgEmail,
  orgEditPermission,
  setIsModalOpen,
  setSelectedOrgName,
  year,
  half,
}) => {
  const [cards, setCards] = useState();

  useEffect(() => {
    getForEntity(`card_records/${orgId}/${year}/${half}`).then(data => {
      setCards(data);
    });
  }, [orgId, year, half]);

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
          {cards === undefined || cards.length === 0 ? (
            <GDSCText size={13} fontType={TextType.BOLD} color={Colors.GREY80}>
              {'미제출'}
            </GDSCText>
          ) : (
            <CardFileArea onClick={() => window.open(cards.URI)}>
              <GDSCText size={13} fontType={TextType.BOLD} color={Colors.GREY80}>
                {'제출됨'}
              </GDSCText>
            </CardFileArea>
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

import React, { useState } from 'react';
import styled from 'styled-components';
import GDSCText, { TextType } from '../../core/GDSCText';
import GDSCButton from '../../core/GDSCButton';
import GDSCDropdown from '../../core/GDSCDropdown';
import Colors from '../../../style/Colors';
import { TextField } from '@mui/material';

const Container = styled.div`
  display: flex;
  width: 450px;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.WHITE100};
`;

const Header = styled.div`
  height: 80px;
  width: 450px;
  display: flex;
  padding: 0px 40px;
  justify-content: space-between;
  flex-shrink: 0;
  align-items: center;
  background-color: ${Colors.GREY20};
`;

const Contents = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  align-self: stretch;
  padding: 0px 40px;
  justify-content: space-between;
  overflow-y: scroll;
`;

const ButtonRow = styled.div`
  height: 100px;
  display: flex;
  position: sticky;
  padding: 0 40px;
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
`;

const ContentsColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: stretch;
  justify-content: space-between; */
  padding: 40px;
  flex: 1 0 0;
`;

const StyledTextField = styled(TextField)`
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  width: 100%;
  height: 80px;
`;

const ImgField = styled.div`
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  width: 274px;
  height: 163px;
`;

const BudgetModal = ({ setIsOpen, setAddRow }) => {
  const [fundSource, setFundSource] = useState(null);
  const [item, setItem] = useState(null);
  const [itemCode, setItemCode] = useState(null);
  const [budget, setBudget] = useState(null);
  const [settlement, setSettlement] = useState(null);
  const [remarks, setRemarks] = useState(null);

  return (
    <Container>
      <Header>
        <GDSCText size={20} fontType={TextType.BOLD} color={Colors.BLACK100}>
          예결산안 내역 추가하기
        </GDSCText>
      </Header>
      <Contents>
        <ContentsColumn>
          <GDSCDropdown value={fundSource} setValue={setFundSource} items={['학생회비', '본회계', '자치']} />
          <StyledTextField label="항목" onChange={e => setItem(e.target.value)} />
          <StyledTextField label="코드" onChange={e => setItemCode(e.target.value)} />
          <StyledTextField label="예산" onChange={e => setBudget(e.target.value)} />
          <StyledTextField label="결산" onChange={e => setSettlement(e.target.value)} />
          <StyledTextField label="비고" onChange={e => setRemarks(e.target.value)} />
        </ContentsColumn>
      </Contents>
      <ButtonRow>
        <GDSCButton
          label={'닫기'}
          onClick={() => {
            setIsOpen(false);
          }}
          inactive={false}
          buttonType="sub"
        />
        <GDSCButton
          label={'등록'}
          onClick={() => {
            setIsOpen(false);
            setAddRow([
              {
                fund_source: fundSource,
                items: [
                  {
                    item,
                    item_code: itemCode,
                    budget,
                    settlement,
                    remarks,
                  },
                ],
              },
            ]);
          }}
          inactive={false}
        />
      </ButtonRow>
    </Container>
  );
};

export default BudgetModal;

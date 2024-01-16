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
  gap: 16px;
  padding: 32px;
  flex: 1 0 0;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const InputTitle = styled.div`
  height: 16px;
  display: flex;
`;

/* const StyledTextField = styled(TextField)`
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  width: 100%;
  height: 80px;
`;
*/

const ImgField = styled.div`
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  width: 274px;
  height: 163px;
`;

const BudgetModal = ({ setIsOpen, setAddRow }) => {
  const [fundSource, setFundSource] = useState(null); // 재원
  const [budgetType, setBudgetType] = useState(null); // 예산분류
  const [item, setItem] = useState(null); // 항목
  const [itemCode, setItemCode] = useState(null); // 코드
  const [budget, setBudget] = useState(null); // 예산
  const [remarks, setRemarks] = useState(null); // 비고

  return (
    <Container>
      <Header>
        <GDSCText size={20} fontType={TextType.BOLD} color={Colors.BLACK100}>
          내역 추가하기
        </GDSCText>
      </Header>
      <Contents>
        <ContentsColumn>
          <InputBox>
            <InputTitle>
              <GDSCText size={13} fontType={TextType.REGULAR} color={Colors.BLACK100}>
                재원
              </GDSCText>
            </InputTitle>
            <GDSCDropdown value={fundSource} setValue={setFundSource} items={['학생회비', '본회계', '자치']} />
          </InputBox>
          <InputBox>
            <GDSCText size={13} fontType={TextType.REGULAR} color={Colors.BLACK100}>
              예산분류
            </GDSCText>
            <TextField
              id="standard-helperText"
              placeholder="입력해주세요"
              variant="standard"
              onChange={e => setBudgetType(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <GDSCText size={13} fontType={TextType.REGULAR} color={Colors.BLACK100}>
              항목
            </GDSCText>
            <TextField
              id="standard-helperText"
              placeholder="입력해주세요"
              variant="standard"
              onChange={e => setItem(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <GDSCText size={13} fontType={TextType.REGULAR} color={Colors.BLACK100}>
              코드
            </GDSCText>
            <TextField
              id="standard-helperText"
              placeholder="입력해주세요"
              variant="standard"
              onChange={e => setItemCode(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <GDSCText size={13} fontType={TextType.REGULAR} color={Colors.BLACK100}>
              예산
            </GDSCText>
            <TextField
              id="standard-helperText"
              placeholder="입력해주세요"
              variant="standard"
              onChange={e => setBudget(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <GDSCText size={13} fontType={TextType.REGULAR} color={Colors.BLACK100}>
              비고
            </GDSCText>
            <TextField
              id="standard-helperText"
              placeholder="입력해주세요"
              variant="standard"
              onChange={e => setRemarks(e.target.value)}
            />
          </InputBox>
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
                    budgetType,
                    item,
                    itemCode,
                    budget,
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

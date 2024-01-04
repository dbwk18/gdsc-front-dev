import { useState } from 'react';
import styled from 'styled-components';
import GDSCText, { TextType } from '../../core/GDSCText';
import GDSCButton from '../../core/GDSCButton';
import Colors from '../../../style/Colors';
import { TextField } from '@mui/material';

const Container = styled.div`
  display: flex;
  width: 450px;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.WHITE100};
  overflow-y: scroll;
`;

const Header = styled.div`
  height: 81px;
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
`;

const ButtonRow = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: row;
  justify-content: space-between;
`;

const ContentsColumn = styled.div`
  display: flex;
  flex-direction: column;
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

const OrgManageModal = ({ setIsOpen, setAddRow, setToastOpen }) => {
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Header>
        <GDSCText size={18} fontType={TextType.BOLD} color={Colors.BLACK100}>
          피감기구 계정 편집하기
        </GDSCText>
      </Header>
      <Contents>
        <ContentsColumn>
          <StyledTextField label="피감기관명" value={orgName} onChange={e => setOrgName(e.target.value)} />
          <StyledTextField label="이메일" value={email} onChange={e => setEmail(e.target.value)} />
          <StyledTextField label="아이디" value={id} onChange={e => setId(e.target.value)} />
          <StyledTextField label="비밀번호" value={password} onChange={e => setPassword(e.target.value)} />
        </ContentsColumn>
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
              setToastOpen(true);
              setAddRow([
                {
                  org_name: orgName,
                  email,
                  id,
                  password,
                },
                // todo:  add api post
              ]);
            }}
            inactive={false}
          />
        </ButtonRow>
      </Contents>
    </Container>
  );
};

export default OrgManageModal;

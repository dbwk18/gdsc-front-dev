import { useState } from 'react';
import styled from 'styled-components';
import GDSCText, { TextType } from '../../core/GDSCText';
import GDSCButton from '../../core/GDSCButton';
import Colors from '../../../style/Colors';
import { postForEntity } from '../../../network/HttpRequests';

const Container = styled.div`
  display: flex;
  width: 450px;
  height: 850px;
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
  background-color: ${Colors.BLUE_DEEP};
  margin-bottom: 20px;
`;

const Contents = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  padding: 0px 0px;
  justify-content: space-between;
`;

const ButtonRow = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ContentRows = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding: 10px;
`;

const StyledTextField = styled.input`
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  width: 100%;
  height: 50px;
  padding: 0px 10px;
  margin-top: 5px;
  font-size: 16px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ContentRow = ({ label, value, onChange }) => {
  return (
    <StyledContent>
      <GDSCText size={15} fontType={TextType.BOLD} color={Colors.GREY80}>
        {label}
      </GDSCText>
      <StyledTextField placeholder={'입력해주세요'} value={value} onChange={onChange} />
    </StyledContent>
  );
};

const OrgCreateModal = ({ setIsOpen, setAddRow, setToastOpen }) => {
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');

  const createOrg = async () => {
    await postForEntity(`/organizations`, {
      name: orgName,
    });

    const response = await postForEntity(`/users`, {
      email,
      organization_name: orgName,
    });

    const { password } = response;

    setAddRow([
      {
        organization_name: orgName,
        email,
        password,
      },
    ]);
  };

  const saveOrg = async () => {
    await createOrg();
    setIsOpen(false);
    setToastOpen(true);
  };

  return (
    <Container>
      <Header>
        <GDSCText size={20} fontType={TextType.BOLD} color={Colors.WHITE100}>
          피감기구 계정 생성하기
        </GDSCText>
      </Header>
      <Contents>
        <ContentRows>
          <ContentRow label="피감기관명" value={orgName} onChange={e => setOrgName(e.target.value)} />
          <ContentRow label="이메일" value={email} onChange={e => setEmail(e.target.value)} />
        </ContentRows>
        <ButtonRow>
          <GDSCButton label={'닫기'} onClick={() => setIsOpen(false)} inactive={false} />
          <GDSCButton label={'저장하기'} onClick={saveOrg} inactive={false} />
        </ButtonRow>
      </Contents>
    </Container>
  );
};

export default OrgCreateModal;

import styled from 'styled-components';
import Colors from '../../../../style/Colors';
import { TextField } from '@mui/material';
import GDSCText, { TextType } from '../../../../components/core/GDSCText';
import GDSCButton, { ButtonType } from '../../../../components/core/GDSCButton';
import { useState } from 'react';
import { postForEntity } from '../../../../network/HttpRequests';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../../../store/atoms/authAtoms';

const Container = styled.div`
  display: flex;
  width: 450px;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.WHITE100};
`;

const Header = styled.div`
  width: 100%;
  height: 96px;
  padding: 32px 40px;
  background-color: ${Colors.GREY20};
`;

const Contents = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonArea = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
`;

const OrgAccountModal = ({ year, half, refresh, onClose }) => {
  const userInfo = useRecoilValue(userAtom);
  const [bank, setBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountOwner, setAccountOwner] = useState('');
  const [name, setName] = useState('');

  const postAccount = () => {
    if (!userInfo) return;
    postForEntity(`accounts/${userInfo.organizationId}/${year}/${half}`, {
      name,
      accountNumber,
      accountOwner,
      accountBank: bank,
    })
      .then(data => {
        window.alert('계좌 등록 성공');
        onClose();
      })
      .catch(data => {
        window.alert('계좌 등록 실패!');
      });
  };

  return (
    <Container>
      <Header>
        <GDSCText size={24} fontType={TextType.BOLD}>
          계좌번호 추가하기
        </GDSCText>
      </Header>
      <Contents>
        <TextField label="은행" value={bank} onChange={e => setBank(e.target.value)} variant="standard" />
        <TextField
          label="계좌번호"
          value={accountNumber}
          onChange={e => setAccountNumber(e.target.value)}
          variant="standard"
        />
        <TextField
          label="예금주"
          value={accountOwner}
          onChange={e => setAccountOwner(e.target.value)}
          variant="standard"
        />
        <TextField label="별명" value={name} onChange={e => setName(e.target.value)} variant="standard" />
      </Contents>
      <ButtonArea>
        <GDSCButton
          label={'닫기'}
          onClick={() => {
            onClose();
          }}
          buttonType={ButtonType.SUB}
        />
        <GDSCButton
          label={'추가하기'}
          onClick={() => {
            postAccount();
          }}
          buttonType={ButtonType.MAIN}
        />
      </ButtonArea>
    </Container>
  );
};

export default OrgAccountModal;

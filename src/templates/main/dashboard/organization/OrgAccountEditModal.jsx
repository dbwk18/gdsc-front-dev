import styled from 'styled-components';
import Colors from '../../../../style/Colors';
import { TextField } from '@mui/material';
import GDSCText, { TextType } from '../../../../components/core/GDSCText';
import GDSCButton, { ButtonType } from '../../../../components/core/GDSCButton';
import { useState } from 'react';
import { deleteForEntity, postForEntity, putForEntity } from '../../../../network/HttpRequests';
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

const OrgAccountEditModal = ({ accountId, name, accountNumber, accountOwner, bank, refresh, onClose }) => {
  const [tempBank, setBank] = useState(bank);
  const [tempAccountNumber, setAccountNumber] = useState(accountNumber);
  const [tempAccountOwner, setAccountOwner] = useState(accountOwner);
  const [tempNickname, setName] = useState(name);

  const editAccount = () => {
    putForEntity(`/accounts/${accountId}`, {
      name: tempNickname,
      accountNumber: tempAccountNumber,
      accountBank: tempBank,
      accountOwner: tempAccountOwner,
    })
      .then(() => {
        window.alert('계좌 수정 성공!');
        refresh();
        onClose();
      })
      .catch(() => {
        window.alert('계좌 수정 실패...');
      });
  };

  const deleteAccount = () => {
    deleteForEntity(`/accounts/${accountId}`)
      .then(() => {
        window.alert('계좌 삭제 성공!');
        refresh();
        onClose();
      })
      .catch(() => {
        window.alert('계좌 삭제 실패...');
      });
  };

  return (
    <Container onClick={e => e.stopPropagation()}>
      <Header>
        <GDSCText size={24} fontType={TextType.BOLD}>
          계좌번호 수정, 삭제하기
        </GDSCText>
      </Header>
      <Contents>
        <TextField label="은행" value={tempBank} onChange={e => setBank(e.target.value)} variant="standard" />
        <TextField
          label="계좌번호"
          value={tempAccountNumber}
          onChange={e => setAccountNumber(e.target.value)}
          variant="standard"
        />
        <TextField
          label="예금주"
          value={tempAccountOwner}
          onChange={e => setAccountOwner(e.target.value)}
          variant="standard"
        />
        <TextField label="별명" value={tempNickname} onChange={e => setName(e.target.value)} variant="standard" />
      </Contents>
      <ButtonArea>
        <GDSCButton
          label={'닫기'}
          onClick={() => {
            onClose();
          }}
          buttonType={ButtonType.NORMAL}
        />
        <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <GDSCButton
            label={'삭제하기'}
            onClick={() => {
              if (window.confirm('해당 계좌를 삭제하시겠습니까?')) {
                deleteAccount();
              }
            }}
            buttonType={ButtonType.SUB}
          />
          <GDSCButton
            label={'수정하기'}
            onClick={() => {
              editAccount();
            }}
            buttonType={ButtonType.MAIN}
          />
        </div>
      </ButtonArea>
    </Container>
  );
};

export default OrgAccountEditModal;

import styled from 'styled-components';
import Colors from '../../../../style/Colors';
import { TextField } from '@mui/material';
import GDSCText, { TextType } from '../../../../components/core/GDSCText';
import GDSCButton, { ButtonType } from '../../../../components/core/GDSCButton';

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

const OrgAccountModal = ({ onClose }) => {
  return (
    <Container>
      <Header>
        <GDSCText size={24} fontType={TextType.BOLD}>
          계좌번호 추가하기
        </GDSCText>
      </Header>
      <Contents>
        <TextField id="standard-basic" label="은행" variant="standard" />
        <TextField id="standard-basic" label="계좌번호" variant="standard" />
        <TextField id="standard-basic" label="별명" variant="standard" />
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
            onClose();
          }}
          buttonType={ButtonType.MAIN}
        />
      </ButtonArea>
    </Container>
  );
};

export default OrgAccountModal;

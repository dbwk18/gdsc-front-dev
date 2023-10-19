import styled from 'styled-components';
import GDSCText, { TextType } from '../components/core/GDSCText';
import GDSCButton from '../components/core/GDSCButton';
import Authentication, { AuthType } from '../store/Authentication';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const LoginPage = () => {
  return (
    <Container>
      <GDSCText size={16} fontType={TextType.BOLD}>
        테스트 로그인 화면
      </GDSCText>
      <Buttons>
        <GDSCButton label="어드민 로그인" onClick={() => Authentication.shared.testLogin(AuthType.ADMIN)} />
        <GDSCButton label="유저 로그인" onClick={() => Authentication.shared.testLogin(AuthType.USER)} />
      </Buttons>
    </Container>
  );
};

export default LoginPage;

import styled from 'styled-components';
import GDSCText, { TextType } from '../components/core/GDSCText';
import GDSCButton from '../components/core/GDSCButton';
import Authentication from '../store/Authentication';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginPage = () => {
  return (
    <Container>
      <GDSCText size={16} fontType={TextType.BOLD}>
        테스트 로그인 화면
      </GDSCText>
      <GDSCButton label="로그인하기" onClick={() => Authentication.shared.testLogin()} />
    </Container>
  );
};

export default LoginPage;

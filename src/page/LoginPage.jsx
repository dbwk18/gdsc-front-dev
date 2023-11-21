import styled from 'styled-components';
import GDSCText, { TextType } from '../components/core/GDSCText';
import Colors from '../style/Colors';
import GDSCButton from '../components/core/GDSCButton';
import { Box, TextField, Typography, Button } from '@mui/material';
import Authentication from '../store/Authentication';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: px;
`;

const StyledForm = styled.form`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; // Adjust the gap as needed
  margin-top: 20px; // Optional, for spacing above the buttons
`;

const LoginPage = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    // Authentication.shared.login(data.get('email'), data.get('password'));
  };

  return (
    <Container>
      <GDSCText size={22} fontType={TextType.BOLD} color={Colors.Black100}>
        Sign in
      </GDSCText>
      <StyledForm>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="이메일"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <ButtonContainer>
          <GDSCButton label={'로그인하기'} onClick={handleSubmit} />
          <GDSCButton
            label={'ID/PW 찾기'}
            onClick={() => {
              alert('아이디 혹은 비밀번호를 잊어버린 경우,감사원 xxx (xxx@kaist.ac.kr) 로 문의 부탁드립니다.');
            }}
          />
        </ButtonContainer>
      </StyledForm>
    </Container>
  );
};

export default LoginPage;

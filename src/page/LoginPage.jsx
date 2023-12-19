import styled from 'styled-components';
import GDSCText, { TextType } from '../components/core/GDSCText';
import Colors from '../style/Colors';
import GDSCButton from '../components/core/GDSCButton';
import { Box, TextField, Typography, Button } from '@mui/material';
import Authentication from '../store/Authentication';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    Authentication.shared.login(email, password).then(role => {
      if (role === 'admin') {
        navigate('/main');
      } else if (role === 'user') {
        navigate('/main');
      } else {
        alert('로그인에 실패했습니다.');
      }
    });
  };

  return (
    <Container>
      <GDSCText size={22} fontType={TextType.BOLD} color={Colors.Black100}>
        Sign in
      </GDSCText>
      <StyledForm
        onSubmit={e => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="이메일"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={e => setEmail(e.target.value)}
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
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <ButtonContainer>
          <GDSCButton label={'로그인하기'} onClick={() => {}} />
          <GDSCButton
            label={'ID/PW 찾기'}
            onClick={e => {
              e.preventDefault();
              alert('아이디 혹은 비밀번호를 잊어버린 경우,감사원 xxx (xxx@kaist.ac.kr) 로 문의 부탁드립니다.');
            }}
            type="button"
          />
        </ButtonContainer>
      </StyledForm>
    </Container>
  );
};

export default LoginPage;

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { useSetRecoilState } from 'recoil';
import { loginAtom, userAtom } from '../../store/atoms/authAtoms';
import Authentication from '../../store/Authentication';

const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 1440px;
  background-color: white;
`;

const RootLayout = () => {
  const setLoginState = useSetRecoilState(loginAtom);
  const setUserInfo = useSetRecoilState(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    Authentication.shared.initialize(setLoginState, setUserInfo);
    navigate('/main/budget');
  }, []);

  return (
    <RootContainer>
      <GlobalStyle />
      <Outlet />
    </RootContainer>
  );
};

export default RootLayout;

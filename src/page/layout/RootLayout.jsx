import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { useRecoilState } from 'recoil';
import { authTypeAtom, loginAtom, userAtom } from '../../store/atoms/authAtoms';
import Authentication from '../../store/Authentication';

const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 1440px;
  background-color: white;
`;

const RootLayout = () => {
  const [loginState, setLoginState] = useRecoilState(loginAtom);
  const [userInfo, setUserInfo] = useRecoilState(userAtom);
  const [authType, setAuthType] = useRecoilState(authTypeAtom);
  const navigate = useNavigate();

  useEffect(() => {
    Authentication.shared.initialize(setLoginState, setAuthType, setUserInfo);
    if (!loginState) navigate('/login');
    else navigate('/main/budget');
  }, []);

  useEffect(() => {
    if (!loginState) navigate('/login');
    // TODO: userInfo에 따라 admin 혹은 유저 사이드로 라우팅
    else navigate('/main/budget');
  }, [loginState]);

  return (
    <RootContainer>
      <GlobalStyle />
      <Outlet />
    </RootContainer>
  );
};

export default RootLayout;

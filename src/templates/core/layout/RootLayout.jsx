import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const RootLayout = () => {
  return (
    <RootContainer>
      <GlobalStyle />
      <Outlet />
    </RootContainer>
  );
};

export default RootLayout;

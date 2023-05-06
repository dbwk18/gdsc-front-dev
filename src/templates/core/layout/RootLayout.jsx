import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const RootLayout = () => {
  return (
    <RootContainer>
      <Outlet />
    </RootContainer>
  );
};

export default RootLayout;

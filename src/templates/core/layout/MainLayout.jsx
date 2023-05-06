import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import MainLeftNavigationBar from '../../main/MainLeftNavigationBar';
import MainTopBar from '../../main/MainTopBar';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  width: 100%;
  flex-grow: 1;
`;

const OutletArea = styled.div`
  flex-grow: 1;
  height: 100%;
`;

const MainLayout = () => {
  return (
    <Container>
      <MainTopBar />
      <Body>
        <MainLeftNavigationBar />
        <OutletArea>
          <Outlet />
        </OutletArea>
      </Body>
    </Container>
  );
};

export default MainLayout;

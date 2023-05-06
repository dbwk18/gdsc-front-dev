import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import MainLeftNavigationBar from '../../main/MainLeftNavigationBar';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const OutletArea = styled.div`
  flex-grow: 1;
  height: 100%;
`;

const MainLayout = () => {
  return (
    <Container>
      <MainLeftNavigationBar />
      <OutletArea>
        <Outlet />
      </OutletArea>
    </Container>
  );
};

export default MainLayout;

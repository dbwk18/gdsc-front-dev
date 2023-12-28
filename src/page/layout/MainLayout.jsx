import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import MainLeftNavigationBar from '../../templates/main/MainLeftNavigationBar';
import MainHeader from '../../templates/main/MainHeader';
import Colors from '../../style/Colors';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
`;

const OutletArea = styled.div`
  flex-grow: 1;
  height: 100%;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.BLUE_BACKGROUND};
`;

const MainLayout = () => {
  return (
    <Container>
      <MainHeader />
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

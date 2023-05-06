import React from 'react';
import styled from 'styled-components';
import Colors from '../../style/Colors';

const Container = styled.div`
  width: 340px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 16px;
  background-color: ${Colors.BLUE_BACKGROUND};
  border-right: 1px solid ${Colors.BLACK08};
`;

const MainLeftNavigationBar = () => {
  return <Container>hi</Container>;
};

export default MainLeftNavigationBar;

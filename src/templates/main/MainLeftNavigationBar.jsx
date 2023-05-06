import React from 'react';
import styled from 'styled-components';
import Colors from '../../style/Colors';
import LNBItem from '../../components/main/LNBItem';

const Container = styled.div`
  width: 340px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 26px;
  gap: 8px;
  background-color: ${Colors.BLUE_BACKGROUND};
  border-right: 1px solid ${Colors.BLACK08};
`;

const MainLeftNavigationBar = () => {
  return (
    <Container>
      <LNBItem label="예결산안" selected />
      <LNBItem label="통장거래내역" selected={false} />
    </Container>
  );
};

export default MainLeftNavigationBar;

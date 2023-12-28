import React from 'react';
import styled from 'styled-components';
import logo from '../../style/img/KAIST_BAI_Logo.svg';

const Container = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 40px;
  flex-shrink: 0;
`;

const MainHeader = () => {
  return (
    <Container>
      <img src={logo} width="120px" alt="logo" />
    </Container>
  );
};

export default MainHeader;

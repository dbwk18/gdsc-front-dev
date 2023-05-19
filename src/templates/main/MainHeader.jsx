import React from 'react';
import styled from 'styled-components';
import BAILogo from 'public/assets/KAIST_BAI_logo.svg';

const Container = styled.div`
  width: 100%;
  height: 134px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 44px;
  flex-shrink: 0;
`;

const MainHeader = () => {
  return <Container>KAIST BAI</Container>;
};

export default MainHeader;

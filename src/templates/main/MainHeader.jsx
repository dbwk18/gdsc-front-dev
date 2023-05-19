import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/KAIST_BAI_logo.svg';

const Container = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  flex-shrink: 0;

  .logo {
    width: 113px;
    height: 21px;
  }
`;

const MainHeader = () => {
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="KAIST BAI logo" />
      </div>
      KAIST 학부 총학생회
    </Container>
  );
};

export default MainHeader;

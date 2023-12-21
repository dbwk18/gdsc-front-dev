import React, { useState } from 'react';
import styled from 'styled-components';
import GDSCText, { TextType } from '../core/GDSCText';

const Container = styled.div`
  display: flex;
  width: 200px;
  height: 52px;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  .Frame481 {
    height: 100%;
    display: flex;
    padding: 0px 20px;
    align-items: center;
    gap: 20px;
  }
`;

function Menu({ iconBlack, iconBlue, menuName, selected, onClick }) {
  const [isPressed, setIsPressed] = useState(false);

  const menuStyles = {
    background: isPressed || selected ? '#E1ECFE' : '#FFFFFF',
  };

  const handleButtonClick = () => {
    setIsPressed(!isPressed);
  };

  return (
    <Container
      style={menuStyles}
      onClick={() => {
        if (onClick) onClick();
      }}
      onMouseEnter={() => {
        setIsPressed(true);
      }}
      onMouseLeave={() => {
        setIsPressed(false);
      }}
    >
      <div className="Frame481">
        {isPressed || selected ? <img src={iconBlue} alt="blue" /> : <img src={iconBlack} alt="black" />}
        <GDSCText size={16} fontType={TextType.MEDIUM} color={isPressed || selected ? '#3680F7' : '#223047'}>
          {menuName}
        </GDSCText>
        {/* <p style={menuNameStyles}>{menuName}</p> */}
      </div>
    </Container>
  );
}

export default Menu;

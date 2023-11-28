import React from 'react';
import GDSCText, { TextType } from '../../core/GDSCText';
import GDSCButton from '../../core/GDSCButton';
import Colors from '../../../style/Colors';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
  margin: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff; // Replace with your theme's background.paper color
  min-width: ${props => props.minWidth};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const InfoCard = ({ title, minWidth = '300px', upperButtonLabel = '', onButtonClick, children }) => {
  return (
    <Container minWidth={minWidth}>
      {title && (
        <Title>
          <GDSCText size={20} fontType={TextType.BOLD} color={Colors.BLACK100}>
            {title}
          </GDSCText>
          {upperButtonLabel !== '' && <GDSCButton label={upperButtonLabel} onClick={onButtonClick} inactive={false} />}
        </Title>
      )}
      {children}
    </Container>
  );
};

export default InfoCard;

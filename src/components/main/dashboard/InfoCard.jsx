import React from 'react';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  background-color: ${Colors.WHITE100};
  min-width: ${props => props.minWidth};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const InfoCard = ({ title, minWidth = '300px', children }) => {
  return (
    <Container minWidth={minWidth}>
      {title && (
        <Title>
          <GDSCText size={20} fontType={TextType.BOLD} color={Colors.BLACK100}>
            {title}
          </GDSCText>
        </Title>
      )}
      {children}
    </Container>
  );
};

export default InfoCard;

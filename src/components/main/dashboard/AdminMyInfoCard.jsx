import React from 'react';
import GDSCText, { TextType } from '../../core/GDSCText';
import GDSCButton from '../../core/GDSCButton';
import Colors from '../../../style/Colors';
import styled from 'styled-components';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';

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

const AdminMyInfoCard = ({ title, minWidth = '300px', children }) => {
  return (
    <Container minWidth={minWidth}>
      {title && (
        <Title>
          <GDSCText size={20} fontType={TextType.BOLD} color={Colors.BLACK100}>
            {title}
          </GDSCText>
          <IconButton onClick={() => alert('편집하기')}>
            <EditOutlinedIcon />
          </IconButton>
        </Title>
      )}

      {children}
    </Container>
  );
};

export default AdminMyInfoCard;

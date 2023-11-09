import React from 'react';
import { Box } from '@mui/material';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';

const InfoCard = ({ title, children }) => {
  return (
    <Box
      sx={{
        padding: 2,
        margin: 2,
        borderRadius: 2,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: 'background.paper',
      }}
    >
      {title && (
        <div style={{ marginBottom: '16px' }}>
          <GDSCText size={20} fontType={TextType.BOLD} color={Colors.BLACK100}>
            {title}
          </GDSCText>
        </div>
      )}
      {children}
    </Box>
  );
};

export default InfoCard;

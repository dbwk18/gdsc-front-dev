import React from 'react';
import { Box, IconButton } from '@mui/material';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const InfoCard = ({ title, minWidth = '300px', redirect = false, onIconClick, children }) => {
  return (
    <Box
      sx={{
        padding: 2,
        margin: 2,
        borderRadius: 2,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: 'background.paper',
        minWidth,
      }}
    >
      {title && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
          }}
        >
          <GDSCText size={20} fontType={TextType.BOLD} color={Colors.BLACK100}>
            {title}
          </GDSCText>
          {redirect && (
            <IconButton onClick={onIconClick}>
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </Box>
      )}
      {children}
    </Box>
  );
};

export default InfoCard;

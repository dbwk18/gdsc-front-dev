import React from 'react';
import { Box } from '@mui/material';
import GDSCText, { TextType } from '../../core/GDSCText';
import GDSCButton from '../../core/GDSCButton';
import Colors from '../../../style/Colors';

const InfoCard = ({ title, minWidth = '300px', redirect = '', onIconClick, children }) => {
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
          {redirect !== '' && <GDSCButton label={'편집하기'} onClick={onIconClick} inactive={false} />}
        </Box>
      )}
      {children}
    </Box>
  );
};

export default InfoCard;

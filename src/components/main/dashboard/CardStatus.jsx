import React from 'react';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';
import styled from 'styled-components';
import { orgs } from './CardGrid';
import LinearProgress from '@mui/material/LinearProgress';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const Container = styled.div`
  width: 100%;
  background-color: ${Colors.GREY20};
  border-radius: 10px;
  padding: 20px 20px;
`;

const Ratio = () => {
  return (
    <div
      style={{
        width: '100px',
        textAlign: 'left',
        marginRight: '10px',
        fontSize: '20px',
        color: Colors.GREY80,
      }}
    >
      <div style={{ display: 'flex' }}>
        <GDSCText size={25} fontType={TextType.BOLD} color={Colors.BLACK100}>
          {orgs.filter(org => org.status === '제출완료').length}
        </GDSCText>
        <p
          style={{
            fontSize: '20px',
            color: Colors.BLACK100,
            marginTop: '8px',
          }}
        >
          /{orgs.length}
        </p>
      </div>
    </div>
  );
};

const CardStatus = () => {
  const submittedRatio = (orgs.filter(org => org.status === '제출완료').length / orgs.length) * 100;
  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <CreditScoreIcon sx={{ marginRight: 1 }} fontSize="large" />
        <GDSCText size={17} fontType={TextType.MEDIUM} color={Colors.BLACK100}>
          카드 제출 현황
        </GDSCText>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '3px' }}>
        <Ratio />
        <LinearProgress
          variant="determinate"
          value={submittedRatio}
          sx={{ height: 12, width: '100%', borderRadius: 1 }}
        />
      </div>
    </Container>
  );
};

export default CardStatus;

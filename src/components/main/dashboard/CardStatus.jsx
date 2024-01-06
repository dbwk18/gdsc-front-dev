import React, { useEffect } from 'react';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';
import styled from 'styled-components';
import LinearProgress from '@mui/material/LinearProgress';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { getForEntity } from '../../../network/HttpRequests';

const Container = styled.div`
  width: 100%;
  background-color: ${Colors.GREY20};
  border-radius: 10px;
  padding: 20px 20px;
`;

const Ratio = ({ numerator, denominator }) => {
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
          {numerator}
        </GDSCText>
        <p
          style={{
            fontSize: '20px',
            color: Colors.BLACK100,
            marginTop: '8px',
          }}
        >
          /{denominator}
        </p>
      </div>
    </div>
  );
};

const CardStatus = () => {
  const [orgs, setOrgs] = React.useState([]);
  const [submittedCount, setSubmittedCount] = React.useState(0);

  useEffect(() => {
    getForEntity(`/users`).then(response => {
      setOrgs(response.filter(org => org.role === 'user'));
      setSubmittedCount(orgs.filter(org => org.status === '제출완료').length);
    });
  }, []);

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <CreditScoreIcon sx={{ marginRight: 1 }} fontSize="large" />
        <GDSCText size={17} fontType={TextType.MEDIUM} color={Colors.BLACK100}>
          카드 제출 현황
        </GDSCText>
      </div>
      {orgs && (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '3px' }}>
          <Ratio numerator={submittedCount} denominator={orgs.length} />
          <LinearProgress
            variant="determinate"
            value={(submittedCount / orgs.length) * 100}
            sx={{ height: 12, width: '100%', borderRadius: 1 }}
          />
        </div>
      )}
    </Container>
  );
};

export default CardStatus;

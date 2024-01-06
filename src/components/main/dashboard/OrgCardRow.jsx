import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import GDSCStatusChip from '../../core/GDSCStatusChip';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-right: 30px;
`;

const OrgCardRow = ({ orgName, cards }) => {
  const submitStatus = cards.length > 0 ? '제출완료' : '미제출';
  return (
    <Container>
      <div style={{ width: '150px' }}>{orgName}</div>
      {/* <div style={{ display: 'flex', justifyContent: 'center', gap: 15, width: '100%', marginRight: 5 }}>
        {org.cards.map(item => (
            <CardMedia component="img" image={item} alt={item} sx={{ width: 80, height: 80, marginBottom: 3 }} />
          ))}
        </div> */}
      <GDSCStatusChip label={submitStatus} red={submitStatus === '미제출'} />
    </Container>
  );
};

export default OrgCardRow;

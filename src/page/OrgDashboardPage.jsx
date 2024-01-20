import styled from 'styled-components';
import GDSCText, { TextType } from '../components/core/GDSCText';
import OrgStatus from '../templates/main/dashboard/organization/OrgStatus';
import OrgEditPeriod from '../templates/main/dashboard/organization/OrgEditPeriod';
import OrgAccountCard from '../templates/main/dashboard/organization/OrgAccountCard';
import { useState, useEffect } from 'react';
import { getForEntity } from '../network/HttpRequests';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SecondRowContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const OrgDashboardPage = () => {
  const [targetYear, setTargetYear] = useState(null);
  const [targetHalf, setTargetHalf] = useState(null);

  useEffect(() => {
    // TODO: 차후 실제 감사 기간 가져와서 판단
    const date = new Date();
    setTargetYear(date.getFullYear());
    setTargetHalf(date.getMonth() < 6 ? 'spring' : 'fall');
  }, []);

  return (
    <Container>
      <TitleContainer>
        <GDSCText size={32} fontType={TextType.BOLD}>
          2024년 상반기
        </GDSCText>
      </TitleContainer>
      <OrgStatus />
      <SecondRowContainer>
        <OrgEditPeriod />
        <OrgAccountCard year={targetYear} half={targetHalf} />
      </SecondRowContainer>
    </Container>
  );
};

export default OrgDashboardPage;

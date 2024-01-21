import styled from 'styled-components';
import GDSCText, { TextType } from '../components/core/GDSCText';
import OrgStatus from '../templates/main/dashboard/organization/OrgStatus';
import OrgEditPeriod from '../templates/main/dashboard/organization/OrgEditPeriod';
import OrgAccountCard from '../templates/main/dashboard/organization/OrgAccountCard';
import { useState, useEffect } from 'react';
import { getForEntity } from '../network/HttpRequests';
import Colors from '../style/Colors';

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
    getForEntity('budgets/period').then(data => {
      function checkDateInRange(start, end) {
        const today = new Date();
        const startDate = new Date(start);
        const endDate = new Date(end);
        return today >= startDate && today <= endDate;
      }
      const ablePeriod = data.filter(d => checkDateInRange(d.start, d.end));
      if (ablePeriod.length !== 0) {
        const selected = ablePeriod[0];
        setTargetYear(selected.year);
        setTargetHalf(selected.half);
      }
    });
  }, []);

  return (
    <Container>
      <TitleContainer>
        {(targetYear === null || targetHalf === null) && (
          <GDSCText size={32} fontType={TextType.BOLD} color={Colors.BLACK40}>
            해당 감사기간이 없습니다
          </GDSCText>
        )}
        {targetYear && targetHalf && (
          <GDSCText size={32} fontType={TextType.BOLD}>
            {`${targetYear}년 ${targetHalf}`}
          </GDSCText>
        )}
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

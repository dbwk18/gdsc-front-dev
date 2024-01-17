import styled from 'styled-components';
import GDSCText, { TextType } from '../components/core/GDSCText';
import OrgStatus from '../templates/main/dashboard/organization/OrgStatus';
import OrgEditPeriod from '../templates/main/dashboard/organization/OrgEditPeriod';

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
`;

const OrgDashboardPage = () => {
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
      </SecondRowContainer>
    </Container>
  );
};

export default OrgDashboardPage;

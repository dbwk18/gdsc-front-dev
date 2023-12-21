import styled from 'styled-components';
import Colors from '../style/Colors';
import OrgMyInfo from '../templates/main/dashboard/organization/OrgMyInfo';
import OrgAccountInfo from '../templates/main/dashboard/organization/OrgAccountInfo';
import OrgEditPeriod from '../templates/main/dashboard/organization/OrgEditPeriod';
import OrgAccountInfoUpload from '../templates/main/dashboard/organization/OrgAccountInfoUpload';
import OrgTransactionUpload from '../templates/main/dashboard/organization/OrgTransactionUpload';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.WHITE100};
  border-radius: 16px;
  padding: 20px 30px;
`;

const RowItems = styled.div`
  display: flex;
  gap: 16px;
`;

const OrgDashboardPage = () => {
  return (
    <Container>
      <RowItems>
        <OrgMyInfo />
        <OrgAccountInfo />
      </RowItems>
      <OrgEditPeriod />
      <RowItems>
        <OrgAccountInfoUpload />
        <OrgTransactionUpload />
      </RowItems>
    </Container>
  );
};

export default OrgDashboardPage;

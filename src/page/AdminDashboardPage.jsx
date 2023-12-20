import styled from 'styled-components';
import Colors from '../style/Colors';
import AdminMyInfo from '../templates/main/dashboard/admin/AdminMyInfo';
import AdminEditPeriod from '../templates/main/dashboard/admin/AdminEditPeriod';
import AdminCardList from '../templates/main/dashboard/admin/AdminCardList';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.WHITE100};
  border-radius: 16px;
  padding: 20px 30px;
  display: flex;
  gap: 2s0px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  gap: 16px;
`;

const AdminDashboardPage = () => {
  return (
    <Container>
      <LeftColumn>
        <AdminMyInfo />
        <AdminEditPeriod />
      </LeftColumn>
      <AdminCardList />
    </Container>
  );
};

export default AdminDashboardPage;

import { AuthType } from '../store/Authentication';
import { authTypeAtom } from '../store/atoms/authAtoms';
import AdminDashboardPage from './AdminDashboardPage';
import OrgDashboardPage from './OrgDashboardPage';
import { useRecoilValue } from 'recoil';

const DashboardPage = () => {
  const authType = useRecoilValue(authTypeAtom);

  return (
    <>
      {authType === AuthType.ADMIN && <AdminDashboardPage />}
      {authType === AuthType.USER && <OrgDashboardPage />}
    </>
  );
};

export default DashboardPage;

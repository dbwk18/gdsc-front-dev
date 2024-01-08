import { AuthType } from '../store/Authentication';
import { authTypeAtom } from '../store/atoms/authAtoms';
import AdminAccountPage from './AdminAccountPage';
import OrgAccountPage from './OrgAccountPage';
import { useRecoilValue } from 'recoil';

const AccountPage = () => {
  const authType = useRecoilValue(authTypeAtom);

  return (
    <>
      {authType === AuthType.ADMIN && <AdminAccountPage />}
      {authType === AuthType.USER && <OrgAccountPage />}
    </>
  );
};

export default AccountPage;

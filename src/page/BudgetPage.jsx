import { AuthType } from '../store/Authentication';
import { authTypeAtom } from '../store/atoms/authAtoms';
import AdminBudgetPage from './AdminBudgetPage';
import OrgBudgetPage from './OrgBudgetPage';
import { useRecoilValue } from 'recoil';

const BudgetPage = () => {
  const authType = useRecoilValue(authTypeAtom);

  return (
    <>
      {authType === AuthType.ADMIN && <AdminBudgetPage />}
      {authType === AuthType.USER && <OrgBudgetPage />}
    </>
  );
};

export default BudgetPage;

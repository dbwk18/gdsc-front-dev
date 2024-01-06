import { useEffect, useState } from 'react';
import InfoItem from '../../../../components/main/dashboard/InfoItem';
import { getForEntity } from '../../../../network/HttpRequests';
import AdminMyInfoCard from '../../../../components/main/dashboard/AdminMyInfoCard';

const AdminMyInfo = () => {
  const [admin, setAdmin] = useState();

  useEffect(() => {
    getForEntity(`/users`).then(response => {
      setAdmin(response.find(user => user.role === 'admin'));
    });
  }, []);

  return (
    <AdminMyInfoCard title={'내 정보'} upperButtonLabel={'편집하기'} onButtonClick={() => {}}>
      {admin && (
        <div style={{ display: 'flex', gap: '16px' }}>
          <InfoItem title={'이메일'} content={admin.email} />
          <InfoItem title={'비밀번호'} content={'******'} />
        </div>
      )}
    </AdminMyInfoCard>
  );
};

export default AdminMyInfo;

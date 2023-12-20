import InfoCard from '../../../../components/main/dashboard/InfoCard';
import InfoItem from '../../../../components/main/dashboard/InfoItem';

const AdminMyInfo = () => {
  return (
    <InfoCard title={'내 정보'} upperButtonLabel={'편집하기'} onButtonClick={() => {}}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <InfoItem title={'기구장'} content={'김넙죽'} />
        <InfoItem title={'이메일'} content={'gamsawon@kaist.ac.kr'} />
      </div>
    </InfoCard>
  );
};

export default AdminMyInfo;

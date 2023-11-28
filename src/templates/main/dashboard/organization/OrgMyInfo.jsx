import InfoCard from '../../../../components/main/dashboard/InfoCard';
import InfoItem from '../../../../components/main/dashboard/InfoItem';

const OrgMyInfo = () => {
  return (
    <InfoCard title={'내 정보'}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <InfoItem title={'기구장'} content={'김넙죽'} />
        <InfoItem title={'이메일'} content={'kaist@kaist.ac.kr'} />
      </div>
    </InfoCard>
  );
};

export default OrgMyInfo;

import InfoCard from '../../../../components/main/dashboard/InfoCard';
import InfoItem from '../../../../components/main/dashboard/InfoItem';

const OrgAccountInfo = () => {
  return (
    <InfoCard title={'계좌번호 정보'}>
      <InfoItem title={'계좌번호'} content={'00000000000 거위은행'} />
    </InfoCard>
  );
};

export default OrgAccountInfo;

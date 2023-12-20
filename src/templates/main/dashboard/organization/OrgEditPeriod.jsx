import InfoCard from '../../../../components/main/dashboard/InfoCard';
import InfoRowItem from '../../../../components/main/dashboard/InfoRowItem';

const OrgEditPeriod = () => {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <InfoCard title={'회계 감사 자료 수정 기간'}>
        <InfoRowItem title={'23년도 하반기 추가 수정 기간'} content={'2021.10.01 ~ 2021.10.31'} />
        <InfoRowItem title={'23년도 하반기 자료 수정 기간'} content={'2021.10.01 ~ 2021.10.31'} />
      </InfoCard>
    </div>
  );
};

export default OrgEditPeriod;

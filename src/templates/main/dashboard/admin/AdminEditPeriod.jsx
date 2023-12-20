import InfoCard from '../../../../components/main/dashboard/InfoCard';
import InfoItem from '../../../../components/main/dashboard/InfoItem';
import InfoRowItem from '../../../../components/main/dashboard/InfoRowItem';
import GDSCButton from '../../../../components/core/GDSCButton';

const AdminEditPeriod = () => {
  return (
    <InfoCard title={'회계 감사 자료 수정 기간'}>
      <InfoItem title={'최근 수정 기간'} content={''} />
      <InfoRowItem title={'23년도 하반기 자료 입력 기간'} content={'2021.10.01 ~ 2021.10.31'} />
      <InfoRowItem title={'23년도 상반기 자료 수정 기간'} content={'2021.10.01 ~ 2021.10.31'} />
      <InfoRowItem title={'23년도 상반기 자료 입력 기간'} content={'2021.10.01 ~ 2021.10.31'} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <GDSCButton label={'감사 시작하기'} onClick={() => {}} inactive={false} />
      </div>
    </InfoCard>
  );
};

export default AdminEditPeriod;

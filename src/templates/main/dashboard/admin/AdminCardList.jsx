import InfoCard from '../../../../components/main/dashboard/InfoCard';
import CardGrid from '../../../../components/main/dashboard/CardGrid';
import CardStatus from '../../../../components/main/dashboard/CardStatus';

const AdminCardList = () => {
  return (
    <InfoCard title={'피감기관 카드 목록'} minWidth="50%">
      <CardStatus />
      <CardGrid />
    </InfoCard>
  );
};

export default AdminCardList;

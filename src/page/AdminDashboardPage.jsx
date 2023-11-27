import styled from 'styled-components';
import Colors from '../style/Colors';
import InfoCard from '../components/main/dashboard/InfoCard';
import InfoTextRow from '../components/main/dashboard/InfoTextRow';
import InfoText from '../components/main/dashboard/InfoText';
import GDSCButton from '../components/core/GDSCButton';
import CardGrid from '../components/main/dashboard/CardGrid';
import CardStatus from '../components/main/dashboard/CardStatus';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.WHITE100};
  border-radius: 16px;
  padding: 20px 30px;
  display: flex;
  gap: 2s0px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 16px;
`;

const AdminDashboardPage = () => {
  return (
    <Container>
      <LeftColumn>
        <InfoCard title={'내 정보'} redirect={'편집하기'} onIconClick={() => console.log('')}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <InfoText title={'기구장'} content={'김넙죽'} />
            <InfoText title={'이메일'} content={'gamsawon@kaist.ac.kr'} />
          </div>
        </InfoCard>
        <InfoCard title={'회계 감사 자료 수정 기간'}>
          <InfoText title={'최근 수정 기간'} content={''} />
          <InfoTextRow title={'23년도 하반기 자료 입력 기간'} content={'2021.10.01 ~ 2021.10.31'} />
          <InfoTextRow title={'23년도 상반기 자료 수정 기간'} content={'2021.10.01 ~ 2021.10.31'} />
          <InfoTextRow title={'23년도 상반기 자료 입력 기간'} content={'2021.10.01 ~ 2021.10.31'} />
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <GDSCButton label={'감사 시작하기'} onClick={() => console.log('')} inactive={false} />
          </div>
        </InfoCard>
      </LeftColumn>
      <InfoCard title={'피감기관 카드 목록'} minWidth="50%">
        <CardStatus />
        <CardGrid />
      </InfoCard>
    </Container>
  );
};

export default AdminDashboardPage;

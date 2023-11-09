import styled from 'styled-components';
import Colors from '../style/Colors';
import { TextType } from '../components/core/GDSCText';
import InfoCard from '../components/main/dashboard/InfoCard';
import InfoTextRow from '../components/main/dashboard/InfoTextRow';
import InfoText from '../components/main/dashboard/InfoText';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.WHITE100};
  border-radius: 16px;
  padding: 20px 30px;
`;

const ItemsRow = styled.div`
  display: flex;
  gap: 16px;
`;

const AdminDashboardPage = () => {
  return (
    <Container>
      <ItemsRow>
        <InfoCard title={'내 정보'}>
          <ItemsRow>
            <InfoText title={'기구장'} content={'김넙죽'} />
            <InfoText title={'이메일'} content={'gamsawon@kaist.ac.kr'} />
          </ItemsRow>
        </InfoCard>
      </ItemsRow>
      <ItemsRow>
        <InfoCard title={'회계 감사 자료 수정 기간'}>
          <InfoTextRow title={'23년도 하반기 추가 수정 기간'} content={'2021.10.01 ~ 2021.10.31'} />
          <InfoTextRow title={'23년도 하반기 자료 수정 기간'} content={'2021.10.01 ~ 2021.10.31'} />
        </InfoCard>
      </ItemsRow>
      <ItemsRow>
        <InfoCard title={'예결산안'}>
          <InfoTextRow title={'제출 기구'} fontType={TextType.BOLD} content={'00개'} />
          <InfoTextRow title={'미제출 기구'} fontType={TextType.BOLD} content={'00개'} />
        </InfoCard>
        <InfoCard title={'통장거래내역'}>
          <InfoTextRow title={'제출 기구'} fontType={TextType.BOLD} content={'00개'} />
          <InfoTextRow title={'미제출 기구'} fontType={TextType.BOLD} content={'00개'} />
        </InfoCard>
      </ItemsRow>
    </Container>
  );
};

export default AdminDashboardPage;

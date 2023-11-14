import styled from 'styled-components';
import Colors from '../style/Colors';
import FileUploadBox from '../components/main/dashboard/FileUploadBox';
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

const DashboardPage = () => {
  return (
    <Container>
      <ItemsRow>
        <InfoCard title={'내 정보'}>
          <ItemsRow>
            <InfoText title={'기구장'} content={'김넙죽'} />
            <InfoText title={'이메일'} content={'kaist@kaist.ac.kr'} />
          </ItemsRow>
        </InfoCard>
        <InfoCard title={'계좌번호 정보'}>
          <InfoText title={'계좌번호'} content={'00000000000 거위은행'} />
        </InfoCard>
      </ItemsRow>
      <ItemsRow>
        <InfoCard title={'회계 감사 자료 수정 기간'}>
          <InfoTextRow title={'23년도 하반기 추가 수정 기간'} content={'2021.10.01 ~ 2021.10.31'} />
          <InfoTextRow title={'23년도 하반기 자료 수정 기간'} content={'2021.10.01 ~ 2021.10.31'} />
        </InfoCard>
      </ItemsRow>
      <ItemsRow>
        <InfoCard title={'통장 정보'} minWidth="400px">
          <FileUploadBox inputId="통장 정보" onFilesSelect={files => console.log(files)} fileType="image/*" />
        </InfoCard>
        <InfoCard title={'거래명세조회서'} minWidth="400px">
          <FileUploadBox
            inputId="거래명세조회서"
            onFilesSelect={files => console.log(files)}
            fileType="application/pdf"
          />
        </InfoCard>
      </ItemsRow>
    </Container>
  );
};

export default DashboardPage;

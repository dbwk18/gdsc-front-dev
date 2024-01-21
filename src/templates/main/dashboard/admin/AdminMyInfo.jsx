import styled from 'styled-components';
import Colors from '../../../../style/Colors';
import GDSCText, { TextType } from '../../../../components/core/GDSCText';

const AdminMyInfo = ({ totalOrgsCount, activeOrgsCount, submittedOrgsCount }) => {
  return (
    <Container>
      <GDSCText size={24} fontType={TextType.BOLD}>
        {`안녕하세요 감사원님 😊`}
      </GDSCText>
      <InfoRowContainer>
        <DividedInfoBox
          title={'피감기관 계정'}
          leftSubtitle={'활성화'}
          leftContent={`${activeOrgsCount}개`}
          rightSubtitle={'비활성화'}
          rightContent={`${totalOrgsCount - activeOrgsCount}개`}
        />
        <DividedInfoBox
          title={'수정권한 계정'}
          leftSubtitle={'권한 있음'}
          leftContent={`${activeOrgsCount}개`}
          rightSubtitle={'권한 없음'}
          rightContent={`${totalOrgsCount - activeOrgsCount}개`}
        />
        <InfoBox title={'카드 제출 현황'} content={`${submittedOrgsCount} / ${totalOrgsCount}`} />
      </InfoRowContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${Colors.WHITE100};
  border-radius: 8px;
  gap: 32px;
`;

const InfoRowContainer = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`;

const InfoBoxContainer = styled.div`
  flex: 1 1 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const InfoBox = ({ title, content }) => {
  return (
    <InfoBoxContainer>
      <GDSCText size={15} fontType={TextType.MEDIUM}>
        {title}
      </GDSCText>
      <GDSCText size={14} fontType={TextType.MEDIUM}>
        {content}
      </GDSCText>
    </InfoBoxContainer>
  );
};

const DividedInfoBox = ({ title, leftSubtitle, leftContent, rightSubtitle, rightContent }) => {
  return (
    <InfoBoxContainer>
      <GDSCText size={15} fontType={TextType.MEDIUM}>
        {title}
      </GDSCText>
      <ContentContainer>
        <ContentBox>
          <GDSCText size={14} fontType={TextType.MEDIUM}>
            {leftSubtitle}
          </GDSCText>
          <GDSCText size={14} fontType={TextType.MEDIUM}>
            {leftContent}
          </GDSCText>
        </ContentBox>
        <ContentBox>
          <GDSCText size={14} fontType={TextType.MEDIUM}>
            {rightSubtitle}
          </GDSCText>
          <GDSCText size={14} fontType={TextType.MEDIUM}>
            {rightContent}
          </GDSCText>
        </ContentBox>
      </ContentContainer>
    </InfoBoxContainer>
  );
};

export default AdminMyInfo;

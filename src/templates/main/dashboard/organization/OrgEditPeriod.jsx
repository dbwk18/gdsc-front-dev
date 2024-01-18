import styled from 'styled-components';
import Colors from '../../../../style/Colors';
import GDSCText, { TextType } from '../../../../components/core/GDSCText';

const Container = styled.div`
  width: 520px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${Colors.WHITE100};
  border-radius: 8px;
  gap: 32px;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .periods {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const OrgEditPeriod = () => {
  return (
    <Container>
      <GDSCText size={24} fontType={TextType.BOLD}>
        회계 감사 자료 수정 기간
      </GDSCText>
      <Contents>
        <GDSCText size={16} fontType={TextType.MEDIUM}>
          최근 수정 기간
        </GDSCText>
        <div className="periods">
          <div className="item">
            <GDSCText size={13}>23년도 하반기 자료 입력 기간</GDSCText>
            <GDSCText size={13}>2023.10.01 ~ 2023.10.15</GDSCText>
          </div>
          <div className="item">
            <GDSCText size={13}>23년도 하반기 자료 입력 기간</GDSCText>
            <GDSCText size={13}>2023.10.01 ~ 2023.10.15</GDSCText>
          </div>
          <div className="item">
            <GDSCText size={13}>23년도 하반기 자료 입력 기간</GDSCText>
            <GDSCText size={13}>2023.10.01 ~ 2023.10.15</GDSCText>
          </div>
        </div>
      </Contents>
    </Container>
  );
};

export default OrgEditPeriod;

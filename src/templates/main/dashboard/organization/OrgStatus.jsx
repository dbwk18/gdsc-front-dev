import styled from 'styled-components';
import Colors from '../../../../style/Colors';
import GDSCText, { TextType } from '../../../../components/core/GDSCText';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${Colors.WHITE100};
  border-radius: 8px;
  gap: 32px;
`;

const StateRowContainer = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`;

const OrgStatus = () => {
  return (
    <Container>
      <GDSCText size={24} fontType={TextType.BOLD}>
        GDSC님 상태
      </GDSCText>
      <StateRowContainer>
        <StateBox title={'계정 상태'} content={'활성화'} />
        <StateBox title={'수정 권한'} content={'수정 가능'} />
        <StateBox title={'계좌번호'} content={'미제출'} />
        <StateBox title={'카드'} content={'미제출'} />
      </StateRowContainer>
    </Container>
  );
};

const StateBoxContainer = styled.div`
  flex: 1 1 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const StateBox = ({ title, content }) => {
  return (
    <StateBoxContainer>
      <GDSCText size={12} fontType={TextType.MEDIUM}>
        {title}
      </GDSCText>
      <GDSCText size={14} fontType={TextType.MEDIUM}>
        {content}
      </GDSCText>
    </StateBoxContainer>
  );
};

export default OrgStatus;

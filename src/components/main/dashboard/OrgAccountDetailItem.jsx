import styled from 'styled-components';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';

const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

const Header = styled.div`
  padding: 16px 12px 8px 12px;
`;

const Content = styled.div`
  padding: 8px 12px 16px 12px;
  background-color: ${Colors.GREY20};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const OrgAccountDetailItem = ({ nickname, bankName, accountNumber }) => {
  return (
    <Container>
      <Header>
        <GDSCText size={14} fontType={TextType.MEDIUM}>
          {nickname}
        </GDSCText>
      </Header>
      <Content>
        <GDSCText size={12} fontType={TextType.MEDIUM}>
          {bankName}
        </GDSCText>
        <GDSCText size={12} fontType={TextType.MEDIUM}>
          {accountNumber}
        </GDSCText>
      </Content>
    </Container>
  );
};

export default OrgAccountDetailItem;

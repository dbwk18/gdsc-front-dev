import styled from 'styled-components';
import Colors from '../../../style/Colors';
import GDSCText, { TextType } from '../../core/GDSCText';
import GDSCButton from '../../core/GDSCButton';

const Container = styled.div`
  width: 1088px;
  height: 638px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
`;

const Header = styled.div`
  height: 72px;
  border-radius: 20px 20px 0px 0px;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FormContainer = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-grow: 1;
`;

const LeftForm = styled.div`
  flex: 4;
  margin: 40px;
`;

const RightForm = styled.div`
  flex: 4;
  margin: 40px;
`;

const BudgetModal = () => {
  return (
    <Container style={{ backgroundColor: Colors.WHITE100 }}>
      <Header style={{ backgroundColor: Colors.BLUE_DEEP }}>
        <GDSCText size={20} fontType={TextType.BOLD} color={Colors.WHITE100}>
          예결산안 항목 추가
        </GDSCText>
        <GDSCText size={20} fontType={TextType.BOLD} color={Colors.WHITE100}>
          X
        </GDSCText>
      </Header>
      <FormContainer>
        <LeftForm>hi</LeftForm>
        <RightForm>hello</RightForm>
        <GDSCButton label={'등록'} />
      </FormContainer>
    </Container>
  );
};

export default BudgetModal;

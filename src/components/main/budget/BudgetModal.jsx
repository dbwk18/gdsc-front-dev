import styled from 'styled-components';
import Colors from '../../../style/Colors';
import GDSCText, { TextType } from '../../core/GDSCText';

import IncomeForm from './IncomeForm';

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
      <IncomeForm />
    </Container>
  );
};

export default BudgetModal;

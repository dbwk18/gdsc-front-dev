import { useState } from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';
import ChartHeader from '../components/main/ChartHeader';
import GDSCText from '../components/core/GDSCText';
import GDSCModal from '../components/core/GDSCModal';
import BudgetModal from '../components/main/budget/BudgetModal';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.WHITE100};
  border-radius: 16px;
  padding: 20px 30px;
`;

const BudgetPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <ChartHeader headerText={'예결산안'} setIsOpen={setIsOpen} />
      <GDSCText size={13}>뭔가 들어갈 곳</GDSCText>
      <GDSCModal open={isOpen} onClose={() => setIsOpen(false)}>
        <BudgetModal setIsOpen={setIsOpen} />
      </GDSCModal>
    </Container>
  );
};

export default BudgetPage;

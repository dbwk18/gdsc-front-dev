import { useState } from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';
import ChartHeader from '../components/main/ChartHeader';
import GDSCText from '../components/core/GDSCText';
import GDSCModal from '../components/core/GDSCModal';
import BudgetTabPanels from '../components/main/budget/BudgetTabPanels';
import BudgetModal from '../components/main/budget/BudgetModal';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.WHITE100};
  border-radius: 16px;
  padding: 20px 30px;
`;

const AdminBudgetPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addRow, setAddRow] = useState([]);

  return (
    <Container>
      <ChartHeader headerText={'예결산안'} label={'PDF로 다운받기'} setIsOpen={setIsOpen} />
      <GDSCModal open={isOpen} onClose={() => setIsOpen(false)}>
        <BudgetModal setIsOpen={setIsOpen} setAddRow={setAddRow} />
      </GDSCModal>
      <BudgetTabPanels addRow={addRow} />
    </Container>
  );
};

export default AdminBudgetPage;

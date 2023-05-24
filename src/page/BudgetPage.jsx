import styled from 'styled-components';
import Colors from '../style/Colors';
import ChartHeader from '../components/main/ChartHeader';
import GDSCText from '../components/core/GDSCText';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.WHITE100};
  border-radius: 16px;
  padding: 20px 30px;
`;

const BudgetPage = () => {
  return (
    <Container>
      <ChartHeader headerText={'예결산안'} />
      <GDSCText size={13}>뭔가 들어갈 곳</GDSCText>
    </Container>
  );
};

export default BudgetPage;

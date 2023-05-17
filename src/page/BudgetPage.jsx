import styled from 'styled-components';
import Colors from '../style/Colors';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.WHITE100};
  border-radius: 16px;
`;

const BudgetPage = () => {
  return <Container>예결산안 페이지</Container>;
};

export default BudgetPage;

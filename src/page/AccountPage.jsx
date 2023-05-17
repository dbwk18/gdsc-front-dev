import styled from 'styled-components';
import Colors from '../style/Colors';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.WHITE100};
  border-radius: 16px;
`;

const AccountPage = () => {
  return <Container>통장거래내역 페이지</Container>;
};

export default AccountPage;

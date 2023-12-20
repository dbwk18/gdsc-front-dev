import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const GroupListPage = () => {
  // TODO: 필요 시 ADMIN이 아닌 유저가 접근 시 튕기도록 할 수 있음

  return <Container>Admin이 볼 수 있는 Group List page가 될 것</Container>;
};

export default GroupListPage;

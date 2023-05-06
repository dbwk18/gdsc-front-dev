import styled from 'styled-components';
import Colors from '../../style/Colors';

const Container = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  padding: 28px;
  color: ${props => (props.selected ? Colors.WHITE100 : Colors.GREY60)};
  background-color: ${props => (props.selected ? Colors.BLUE_DEEP : 'rgba(0, 0, 0, 0)')};
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.selected ? Colors.BLUE_DEEP : Colors.BLUE_LIGHT)};
  }
`;

const LNBItem = ({ label, selected, onClick }) => {
  return (
    <Container selected={selected} onClick={onClick}>
      {label}
    </Container>
  );
};

export default LNBItem;

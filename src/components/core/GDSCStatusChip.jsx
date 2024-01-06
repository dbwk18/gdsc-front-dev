import styled from 'styled-components';
import GDSCText, { TextType } from './GDSCText';

const Container = styled.div`
  all: unset;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  background-color: ${props => props.backgroundColor};
  width: ${props => props.width};
  height: 24px;
`;

const Dot = styled.div`
  height: 6px;
  width: 6px;
  background-color: ${props => props.color};
  border-radius: 50%;
  display: inline-block;
`;

export const ButtonType = {
  MAIN: 'main',
};

const GDSCStatusChip = ({ label, width = '65px', red = false }) => {
  const backgroundColor = red ? '#ffe6e6' : '#dff7e0';
  const color = red ? '#ff0000' : '#28c82e';

  return (
    <Container backgroundColor={backgroundColor} width={width}>
      <Dot color={color} />
      <GDSCText size={12} fontType={TextType.BOLD} color={color}>
        {label}
      </GDSCText>
    </Container>
  );
};

export default GDSCStatusChip;

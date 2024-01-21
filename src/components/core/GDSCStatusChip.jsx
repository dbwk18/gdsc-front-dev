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
  width: fit-content;
  height: 24px;
  padding: 10px;
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

const GDSCStatusChip = ({ label, width = '65px', red = false, backgroundColor = '#dff7e0', textColor = '#28c82e' }) => {
  const chipBackgroundColor = red ? '#ffe6e6' : backgroundColor;
  const chipTextColor = red ? '#ff0000' : textColor;

  return (
    <Container backgroundColor={chipBackgroundColor} width={width}>
      <Dot color={chipTextColor} />
      <GDSCText size={12} fontType={TextType.BOLD} color={chipTextColor}>
        {label}
      </GDSCText>
    </Container>
  );
};

export default GDSCStatusChip;

import styled from 'styled-components';
import GDSCText, { TextType } from './GDSCText';

const Button = styled.button`
  all: unset;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  border-radius: 16px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 4px;

  &.main {
    width: 58px;
    height: 24px;
    background-color: #dff7e0;

    &.inactive {
      background-color: #ff0000; //임의로 설정함
    }
  }
`;

const Dot = styled.div`
  height: 6px;
  width: 6px;
  background-color: #28c82e;
  border-radius: 50%;
  display: inline-block;
`;

export const ButtonType = {
  MAIN: 'main',
};

const GDSCStatusButton = ({ label, onClick, inactive = false, buttonType = ButtonType.MAIN }) => {
  const buttonClassName = `${buttonType}${inactive ? 'inactive' : ''}`;
  const handleClick = () => {
    if (!inactive) onClick();
  };

  return (
    <Button onClick={handleClick} className={buttonClassName}>
      <Dot />
      <GDSCText size={12} fontType={TextType.BOLD} color="#28c82e">
        {label}
      </GDSCText>
    </Button>
  );
};

export default GDSCStatusButton;

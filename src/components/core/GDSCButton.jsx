import styled from 'styled-components';
import GDSCText, { TextType } from './GDSCText';
import Colors from '../../style/Colors';

const Button = styled.button`
  // css 초기화
  all: unset;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;

  &.main {
    height: 40px;
    padding: 0 16px;
    background-color: ${Colors.BLUE_DEEP};

    &:hover {
      filter: brightness(110%);
    }

    &.inactive {
      background-color: ${Colors.GREY40};

      &:hover {
        filter: brightness(100%);
      }
    }
  }
`;

export const ButtonType = {
  MAIN: 'main',
};

const GDSCButton = ({ label, onClick, inactive = false, buttonType = ButtonType.MAIN }) => {
  const buttonClassName = `${buttonType} ${inactive ? 'inactive' : ''}`;
  const handleClick = () => {
    if (!inactive) onClick();
  };

  return (
    <Button onClick={handleClick} className={buttonClassName}>
      <GDSCText size={14} fontType={TextType.BOLD} color={Colors.WHITE100}>
        {label}
      </GDSCText>
    </Button>
  );
};

export default GDSCButton;

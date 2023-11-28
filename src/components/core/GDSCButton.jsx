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
  border-radius: 8px;
  text-align: center;

  &.main {
    height: 40px;
    padding: 16px 36.5px;
    background-color: ${Colors.GREY20};

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

const GDSCButton = ({ label, onClick, inactive = true, buttonType = ButtonType.MAIN }) => {
  const buttonClassName = `${buttonType} ${inactive ? 'inactive' : ''}`;
  const handleClick = () => {
    if (!inactive) onClick();
  };

  return (
    <Button onClick={handleClick} className={buttonClassName}>
      <GDSCText size={14} fontType={TextType.REGULAR} color={Colors.BLACK100}>
        {label}
      </GDSCText>
    </Button>
  );
};

export default GDSCButton;

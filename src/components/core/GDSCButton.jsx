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

const GDSCButton = ({ label, onClick, inactive = false, buttonType = ButtonType.MAIN, ...props }) => {
  const buttonClassName = `${buttonType} ${inactive ? 'inactive' : ''}`;
  const handleClick = e => {
    if (!inactive) onClick(e);
  };

  return (
    <Button onClick={handleClick} className={buttonClassName} props>
      <GDSCText size={14} fontType={TextType.BOLD} color={Colors.WHITE100}>
        {label}
      </GDSCText>
    </Button>
  );
};

export default GDSCButton;

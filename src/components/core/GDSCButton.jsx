import styled from 'styled-components';
import GDSCText, { TextType } from './GDSCText';
import Colors from '../../style/Colors';

const Button = styled.button`
  // css 초기화
  all: unset;
  box-sizing: border-box;

  display: flex;
  padding: 25px 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border-radius: 8px;
  border-color: ${Colors.GREY60};
  text-align: center;

  &.main {
    height: 40px;
    background-color: ${Colors.BLUE_MEDIUM};

    p {
      color: ${Colors.WHITE100};
    }

    &:hover {
      filter: brightness(50%);
    }

    &.inactive {
      background-color: ${Colors.GREY40};

      &:hover {
        filter: brightness(100%);
      }
    }
  }

  &.normal {
    height: 40px;
    background-color: ${Colors.GREY20};

    p {
      color: ${Colors.BLACK100};
    }

    &:hover {
      filter: brightness(50%);
    }

    &.inactive {
      background-color: ${Colors.GREY40};

      &:hover {
        filter: brightness(100%);
      }
    }
  }

  &.sub {
    height: 40px;
    background-color: ${Colors.GREY20};

    p {
      color: ${Colors.RED100};
    }

    &:hover {
      filter: brightness(50%);
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
  NORMAL: 'normal',
  SUB: 'sub',
};

const GDSCButton = ({ label, onClick, inactive = false, buttonType = ButtonType.MAIN, ...props }) => {
  const buttonClassName = `${buttonType} ${inactive ? 'inactive' : ''}`;
  const handleClick = e => {
    if (!inactive) onClick(e);
  };

  return (
    <Button onClick={handleClick} className={buttonClassName} props>
      <GDSCText size={14}>{label}</GDSCText>
    </Button>
  );
};

export default GDSCButton;

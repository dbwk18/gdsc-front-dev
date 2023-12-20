import styled from 'styled-components';
import Colors from '../../style/Colors';

export const TextType = {
  BOLD: 'Bold',
  REGULAR: 'Regular',
  MEDIUM: 'Medium',
  LIGHT: 'Light',
  UNDERLINE: 'Underline',
};

const Text = styled.p`
  all: unset;
  display: flex;
  flex-shrink: 0;

  font-family: ${props =>
    `Noto Sans KR ${props.font === TextType.UNDERLINE ? TextType.REGULAR : props.font}, sans-serif`};
  font-style: normal;
  font-weight: normal;
  font-size: ${props => props.fontSizePx}px;
  line-height: ${props => `${props.lineHeight}px`};
  white-space: pre-wrap;
  color: ${props => props.fontColor};
  ${props => (props.font === TextType.UNDERLINE ? 'text-decoration: underline;' : '')};
  width: fit-content;
  height: fit-content;
`;

const calculateLineHeight = size => {
  if (!size) {
    return 18;
  }

  switch (size) {
    case 9:
      return 12;
    case 11:
      return 16;
    case 12:
      return 18;
    case 14:
    case 16:
    case 18:
    case 20:
      return size + 8;
    case 24:
      return 32;
    default: // 28, 32
      return size + 12;
  }
};

const GDSCText = ({ size = 11, fontType = TextType.REGULAR, color = Colors.BLACK100, children, ...props }) => {
  return (
    <Text fontSizePx={size} font={fontType} fontColor={color} lineHeight={calculateLineHeight(size)} props={props}>
      {children}
    </Text>
  );
};

export default GDSCText;

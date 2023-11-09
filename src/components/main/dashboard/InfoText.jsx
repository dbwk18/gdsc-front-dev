import styled from 'styled-components';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';

const InfoTextContainer = styled.div`
  margin-bottom: 16px;
  margin-right: 60px;
  display: flex;
  flex-direction: column;
`;

const InfoText = ({ title, content }) => {
  return (
    <InfoTextContainer>
      <GDSCText size={15} fontType={TextType.BOLD} color={Colors.BLACK100}>
        {title}
      </GDSCText>
      <GDSCText size={12} fontType={TextType.MEDIUM} color={Colors.GREY80}>
        {content}
      </GDSCText>
    </InfoTextContainer>
  );
};

export default InfoText;

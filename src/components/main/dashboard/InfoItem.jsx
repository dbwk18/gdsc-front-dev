import styled from 'styled-components';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';

const InfoItemContainer = styled.div`
  margin-bottom: 16px;
  margin-right: 60px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const InfoItem = ({ title, content }) => {
  return (
    <InfoItemContainer>
      <GDSCText size={15} fontType={TextType.BOLD} color={Colors.BLACK100}>
        {title}
      </GDSCText>
      <GDSCText size={12} fontType={TextType.MEDIUM} color={Colors.GREY80}>
        {content}
      </GDSCText>
    </InfoItemContainer>
  );
};

export default InfoItem;

import styled from 'styled-components';
import GDSCText from '../../core/GDSCText';
import Colors from '../../../style/Colors';

const InfoTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  margin-bottom: 16px;
`;

const InfoTextRow = ({ title, content, fontType }) => {
  return (
    <InfoTextContainer>
      <GDSCText size={15} fontType={fontType} color={Colors.BLACK100}>
        {title}
      </GDSCText>
      <GDSCText size={15} fontType={fontType} color={Colors.BLACK100}>
        {content}
      </GDSCText>
    </InfoTextContainer>
  );
};

export default InfoTextRow;

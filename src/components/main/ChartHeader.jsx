import styled from 'styled-components';
import GDSCText, { TextType } from '../core/GDSCText';
import Colors from '../../style/Colors';
import GDSCButton from '../core/GDSCButton';

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  padding: 0 12px;
  align-items: center;
  justify-content: space-between;

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;

const ChartHeader = ({ headerText, label, setIsOpen }) => {
  return (
    <Container>
      <div className="title">
        <GDSCText size={24} fontType={TextType.BOLD} color={Colors.BLACK100}>
          {headerText}
        </GDSCText>
      </div>
      <GDSCButton
        label={label}
        onClick={() => {
          setIsOpen(true);
        }}
        inactive={false}
      />
    </Container>
  );
};

export default ChartHeader;

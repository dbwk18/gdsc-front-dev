import styled from 'styled-components';
import GDSCText, { TextType } from '../../core/GDSCText';
import GDSCButton from '../../core/GDSCButton';
import Colors from '../../../style/Colors';

const Container = styled.div`
  display: flex;
  width: 480px;
  height: 261px;
  border-radius: 8px;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Colors.WHITE100};
  overflow-y: scroll;
  padding: 30px;
  margin: 16px;
  gap: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ClsoeButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;

const BudgetPeriodStartModal = ({ setIsOpen }) => {
  return (
    <Container>
      <TextContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <GDSCText size={25} fontType={TextType.BOLD} color={Colors.BLACK100}>
            {'감사 시작하기'}
          </GDSCText>
          <ClsoeButton
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {' '}
            x{' '}
          </ClsoeButton>
        </div>
        <div>
          <GDSCText size={14} fontType={TextType.MEDIUM} color={Colors.BLACK100}>
            {'감사기간을 시작합니다.'}
          </GDSCText>
          <GDSCText size={14} fontType={TextType.MEDIUM} color={Colors.BLACK100}>
            {'2024년 1월 1일 오후 8시부터 7일간 설정됩니다.'}
          </GDSCText>
        </div>
      </TextContainer>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <GDSCButton
          label={'감사 시작하기'}
          onClick={() => {
            alert('감사 시작');
          }}
          inactive={false}
        />
      </div>
    </Container>
  );
};

export default BudgetPeriodStartModal;

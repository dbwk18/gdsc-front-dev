import styled from 'styled-components';
import Colors from '../../../style/Colors';
import GDSCText, { TextType } from '../../core/GDSCText';
import GDSCButton from '../../core/GDSCButton';
import SelectDrop from './SelectDrop';
import TextField from '@mui/material/TextField';

const Container = styled.div`
  width: 1088px;
  height: 638px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
`;

const Header = styled.div`
  height: 72px;
  border-radius: 20px 20px 0px 0px;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FormContainer = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-grow: 1;
`;

const LeftForm = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  margin: 40px;
  justify-content: space-between;
  align-items: stretch;
`;

const RightForm = styled.div`
  flex: 7;
  margin: 40px;
  flex-direction: column;
`;

const ButtonForm = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
`;

const TextForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BudgetModal = () => {
  return (
    <Container style={{ backgroundColor: Colors.WHITE100 }}>
      <Header style={{ backgroundColor: Colors.BLUE_DEEP }}>
        <GDSCText size={20} fontType={TextType.BOLD} color={Colors.WHITE100}>
          예결산안 항목 추가
        </GDSCText>
        <GDSCText size={20} fontType={TextType.BOLD} color={Colors.WHITE100}>
          X
        </GDSCText>
      </Header>
      <FormContainer>
        <LeftForm>
          <TextForm>
            <GDSCText size={14} fontType={TextType.BOLD}>
              수입/지출
            </GDSCText>
            <SelectDrop />
          </TextForm>
          <TextForm>
            <GDSCText size={14} fontType={TextType.BOLD}>
              출처
            </GDSCText>{' '}
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </TextForm>
          <TextForm>
            <GDSCText size={14} fontType={TextType.BOLD}>
              항목
            </GDSCText>
          </TextForm>
          <TextForm>
            <GDSCText size={14} fontType={TextType.BOLD}>
              코드
            </GDSCText>
          </TextForm>
        </LeftForm>
        <RightForm>hello</RightForm>
        <ButtonForm>
          <GDSCButton label={'등록'} />
        </ButtonForm>
      </FormContainer>
    </Container>
  );
};

export default BudgetModal;

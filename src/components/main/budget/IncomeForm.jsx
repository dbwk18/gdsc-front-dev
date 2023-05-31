import styled from 'styled-components';
import GDSCButton from '../../core/GDSCButton';
import SelectDrop from './SelectDrop';
import TextField from '@mui/material/TextField';
import GDSCText, { TextType } from '../../core/GDSCText';

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

const IncomeForm = () => {
  return (
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
  );
};

export default IncomeForm;

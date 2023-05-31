import styled from 'styled-components';
import GDSCButton from '../../core/GDSCButton';
import SelectDrop from './SelectDrop';
import TextField from '@mui/material/TextField';
import GDSCText, { TextType } from '../../core/GDSCText';

const MyTextField = styled(TextField)`
  width: 250px;
  height: 40px;
`;

const FormContainer = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-grow: 1;
`;

const BodyForm = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  margin: 40px;
  justify-content: space-between;
  align-items: stretch;
`;

const ButtonForm = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
`;

const TextForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

const Text1Form = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 120px;
`;

const IncomeForm = () => {
  return (
    <FormContainer>
      <BodyForm>
        <TextForm>
          <GDSCText size={14} fontType={TextType.BOLD}>
            수입/지출
          </GDSCText>
          <SelectDrop />
        </TextForm>
        <TextForm>
          <GDSCText size={14} fontType={TextType.BOLD}>
            담당
          </GDSCText>
          <MyTextField id="outlined-size-small" label="담당" size="small" />
        </TextForm>
        <TextForm>
          <GDSCText size={14} fontType={TextType.BOLD}>
            소항목
          </GDSCText>
          <MyTextField id="outlined-size-small" label="소항목" size="small" />
        </TextForm>
        <TextForm>
          <GDSCText size={14} fontType={TextType.BOLD}>
            출처
          </GDSCText>
          <MyTextField id="outlined-size-small" label="출처" size="small" />
        </TextForm>
        <TextForm>
          <GDSCText size={14} fontType={TextType.BOLD}>
            세부사항
          </GDSCText>
          <MyTextField id="outlined-size-small" label="세부사항" size="small" />
        </TextForm>
        <TextForm>
          <GDSCText size={14} fontType={TextType.BOLD}>
            코드
          </GDSCText>
          <MyTextField id="outlined-size-small" label="코드" size="small" />
        </TextForm>
      </BodyForm>
      <BodyForm>
        <TextForm>
          <GDSCText size={14} fontType={TextType.BOLD}>
            예산
          </GDSCText>
          <MyTextField id="outlined-size-small" label="예산" size="small" />
        </TextForm>
        <TextForm>
          <GDSCText size={14} fontType={TextType.BOLD}>
            결산
          </GDSCText>
          <MyTextField id="outlined-size-small" label="결산" size="small" />
        </TextForm>
        <Text1Form>
          <GDSCText size={14} fontType={TextType.BOLD}>
            비고
          </GDSCText>
          <MyTextField id="outlined-multiline-static" label="비고" multiline rows={5.55} />
        </Text1Form>
      </BodyForm>
      <ButtonForm>
        <GDSCButton label={'등록'} />
      </ButtonForm>
    </FormContainer>
  );
};

export default IncomeForm;

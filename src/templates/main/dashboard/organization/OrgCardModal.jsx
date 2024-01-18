import styled from 'styled-components';
import Colors from '../../../../style/Colors';
import { TextField } from '@mui/material';
import GDSCText, { TextType } from '../../../../components/core/GDSCText';
import GDSCButton, { ButtonType } from '../../../../components/core/GDSCButton';
import GDSCDialog from '../../../../components/core/GDSCDialog';
import FileUploadContainer from '../../../../components/main/dashboard/FileUploadContainer';

const Container = styled.div`
  width: 480px;
  height: fit-content;
  padding: 32px;
  border-radius: 8px;
  background-color: ${Colors.WHITE100};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const OrgCardModal = ({ isOpen, onClose }) => {
  return (
    <GDSCDialog open={isOpen} onClose={onClose}>
      <Container>
        <GDSCText size={24} fontType={TextType.BOLD}>
          카드 정보 추가하기
        </GDSCText>
        <GDSCText size={16} fontType={TextType.REGULAR}>
          사용하는 카드를 하나의 pdf 파일에 정리해서 제출해주세요
        </GDSCText>
        <FileUploadContainer inputId="거래명세조회서" onFilesSelect={() => {}} fileType="application/pdf" />
        <ButtonArea>
          <GDSCButton buttonType={ButtonType.MAIN} label={'제출하기'} onClick={() => {}} />
        </ButtonArea>
      </Container>
    </GDSCDialog>
  );
};

export default OrgCardModal;

import styled from 'styled-components';
import Colors from '../../../../style/Colors';
import { TextField } from '@mui/material';
import GDSCText, { TextType } from '../../../../components/core/GDSCText';
import GDSCButton, { ButtonType } from '../../../../components/core/GDSCButton';
import GDSCDialog from '../../../../components/core/GDSCDialog';
import FileUploadContainer from '../../../../components/main/dashboard/FileUploadContainer';
import { useState, useEffect } from 'react';
import { postForEntity, deleteForEntity } from '../../../../network/HttpRequests';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../../../store/atoms/authAtoms';

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

const OrgCardModal = ({ isOpen, year, half, refresh, onClose }) => {
  const userInfo = useRecoilValue(userAtom);
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    console.log('files', selectedFiles);
  }, [selectedFiles]);

  const uploadPdf = async () => {
    const file = selectedFiles[0];
    const reader = new FileReader();
    reader.onload = e => {
      const data = e.target.result;
      const formData = new FormData();
      formData.append('file', new Blob([data], { type: file.type }), file.name);
      postForEntity(`card_records/${userInfo.organizationId}/${year}/${half}`, formData)
        .then(() => {
          window.alert('파일 업로드 성공!');
          refresh();
          onClose();
        })
        .catch(() => {
          window.alert('파일 업로드 실패...');
        });
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <GDSCDialog open={isOpen} onClose={onClose}>
      <Container>
        <GDSCText size={24} fontType={TextType.BOLD}>
          카드 정보 추가하기
        </GDSCText>
        <GDSCText size={16} fontType={TextType.REGULAR}>
          사용하는 카드를 하나의 pdf 파일에 정리해서 제출해주세요(하나만 업로드됩니다)
        </GDSCText>
        <FileUploadContainer
          inputId="거래명세조회서"
          onFilesSelect={files => setSelectedFiles(files)}
          fileType="application/pdf"
          hideButton
        />
        <ButtonArea>
          <GDSCButton
            buttonType={ButtonType.MAIN}
            label={'제출하기'}
            inactive={selectedFiles.length === 0}
            onClick={() => {
              uploadPdf();
            }}
          />
        </ButtonArea>
      </Container>
    </GDSCDialog>
  );
};

export default OrgCardModal;

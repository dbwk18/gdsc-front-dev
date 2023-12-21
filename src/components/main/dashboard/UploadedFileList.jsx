import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';
import styled from 'styled-components';

const FileList = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
`;

const FileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Add more styles as needed */
`;

const UploadedFileList = ({ uploadedFiles, setUploadedFiles, isUploaded }) => {
  const deleteFile = fileIndex => {
    setUploadedFiles(prevFiles => prevFiles.filter((_, index) => index !== fileIndex));
  };

  return (
    <div>
      <FileList>
        {uploadedFiles.map((file, index) => (
          <FileListItem file={file} index={index} deleteFile={deleteFile} isUploaded={isUploaded} />
        ))}
      </FileList>
    </div>
  );
};

const FileListItem = ({ file, index, deleteFile, isUploaded }) => {
  return (
    <FileItem key={file.name}>
      <GDSCText size={15} type={TextType.REGULAR} color={Colors.BLACK100}>
        {file.name}
      </GDSCText>
      {!isUploaded && (
        <IconButton edge="end" aria-label="delete" onClick={() => deleteFile(index)}>
          <DeleteIcon />
        </IconButton>
      )}
    </FileItem>
  );
};

export default UploadedFileList;

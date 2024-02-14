import React, { useState } from 'react';
import GDSCText, { TextType } from '../../core/GDSCText';
import GDSCButton from '../../core/GDSCButton';
import Colors from '../../../style/Colors';
import styled from 'styled-components';
import UploadedFileList from './UploadedFileList';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px; // Adjust as needed
`;

const UplaodBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  border: 1px dashed grey;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 16px;
  &:hover {
    background-color: #f5f5f5; // Replace with your theme's action.hover color
  }
`;

const FileUploadContainer = ({ inputId, onFilesSelect, fileType, hideButton = false }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleUpload = () => {
    setIsUploaded(true);
  };

  const handleEdit = () => {
    setIsUploaded(false);
  };

  return (
    <div>
      {!isUploaded && (
        <FileUploadBox
          inputId={inputId}
          fileType={fileType}
          onFilesSelect={onFilesSelect}
          setUploadedFiles={setUploadedFiles}
        />
      )}

      {uploadedFiles.length > 0 && (
        <div>
          <UploadedFileList
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
            isUploaded={isUploaded}
            setIsUploaded={setIsUploaded}
          />
          {!hideButton && (
            <FileUploadButton isUploaded={isUploaded} handleUpload={handleUpload} handleEdit={handleEdit} />
          )}
        </div>
      )}
    </div>
  );
};

const FileUploadBox = ({ inputId, fileType, onFilesSelect, setUploadedFiles }) => {
  const handleFileInput = event => {
    const files = Array.from(event.target.files);
    onFilesSelect(files);
    setUploadedFiles(prevFiles => [...prevFiles, ...files]);
  };

  return (
    <UplaodBox onClick={() => document.getElementById(inputId).click()}>
      <input
        accept={fileType}
        id={inputId}
        type="file"
        multiple
        style={{ display: 'none' }}
        onChange={handleFileInput}
      />
      <GDSCText size={30} fontType={TextType.MEDIUM} color={Colors.GREY80}>
        +
      </GDSCText>
    </UplaodBox>
  );
};

const FileUploadButton = ({ isUploaded, handleUpload, handleEdit }) => {
  return (
    <ButtonContainer>
      {!isUploaded ? (
        <GDSCButton label={'업로드'} onClick={handleUpload} inactive={false} />
      ) : (
        <GDSCButton label={'수정'} onClick={handleEdit} inactive={false} />
      )}
    </ButtonContainer>
  );
};

export default FileUploadContainer;

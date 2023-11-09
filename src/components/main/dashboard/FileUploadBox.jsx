import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import GDSCButton from '../../core/GDSCButton';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';
import DeleteIcon from '@mui/icons-material/Delete';

const FileUploadBox = ({ onFilesSelect, fileType }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileInput = event => {
    const files = Array.from(event.target.files);
    onFilesSelect(files);
    setUploadedFiles(prevFiles => [...prevFiles, ...files]);
  };

  const deleteFile = fileIndex => {
    setUploadedFiles(prevFiles => prevFiles.filter((_, index) => index !== fileIndex));
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          p: 3,
          border: '1px dashed grey',
          borderRadius: 2,
          cursor: 'pointer',
          ':hover': {
            backgroundColor: 'action.hover',
          },
        }}
        onClick={() => document.getElementById('fileInput').click()}
      >
        <input
          accept={fileType}
          id="fileInput"
          type="file"
          multiple
          style={{ display: 'none' }}
          onChange={handleFileInput}
        />
        <GDSCText size={15} fontType={TextType.MEDIUM} color={Colors.BLACK100}>
          Drag and drop files here or click to select files
        </GDSCText>
        <GDSCButton label={'Upload Files'} onClick={() => {}} inactive={false} />
      </Box>
      {uploadedFiles.length > 0 && (
        <List>
          {uploadedFiles.map((file, index) => (
            <ListItem
              key={file.name}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => deleteFile(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={file.name} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default FileUploadBox;

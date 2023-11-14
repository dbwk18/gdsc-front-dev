import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import GDSCButton from '../../core/GDSCButton';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';
import DeleteIcon from '@mui/icons-material/Delete';

const FileUploadBox = ({ inputId, onFilesSelect, fileType }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleFileInput = event => {
    const files = Array.from(event.target.files);
    onFilesSelect(files);
    setUploadedFiles(prevFiles => [...prevFiles, ...files]);
  };

  const deleteFile = fileIndex => {
    setUploadedFiles(prevFiles => prevFiles.filter((_, index) => index !== fileIndex));
  };

  const handleComplete = () => {
    setIsComplete(true);
  };

  const handleEdit = () => {
    setIsComplete(false);
  };

  return (
    <Box>
      {!isComplete && (
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
          onClick={() => document.getElementById(inputId).click()}
        >
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
        </Box>
      )}

      {uploadedFiles.length > 0 && (
        <Box>
          <List>
            {uploadedFiles.map((file, index) => (
              <ListItem
                key={file.name}
                secondaryAction={
                  !isComplete && (
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteFile(index)}>
                      <DeleteIcon />
                    </IconButton>
                  )
                }
              >
                <ListItemText primary={file.name} />
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mt: 2, // Add margin-top
            }}
          >
            {!isComplete ? (
              <GDSCButton label={'업로드'} onClick={handleComplete} inactive={false} />
            ) : (
              <GDSCButton label={'수정'} onClick={handleEdit} inactive={false} />
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FileUploadBox;

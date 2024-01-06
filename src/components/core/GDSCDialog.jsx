import { Modal } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
`;

const GDSCDialog = ({ open, onClose, children }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Wrapper>{children}</Wrapper>
    </Modal>
  );
};

export default GDSCDialog;

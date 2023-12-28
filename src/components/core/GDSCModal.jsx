import { Modal } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(-100%, -100%);
  outline: none;
`;

const GDSCModal = ({ open, onClose, children }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Wrapper>{children}</Wrapper>
    </Modal>
  );
};

export default GDSCModal;

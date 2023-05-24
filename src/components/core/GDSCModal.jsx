import { Modal } from '@mui/material';
import styled from 'styled-components';
import Colors from '../../style/Colors';

const Wrapper = styled.div`
  background-color: ${Colors.WHITE100};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

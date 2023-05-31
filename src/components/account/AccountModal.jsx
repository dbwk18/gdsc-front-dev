import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../style/Colors';
import GDSCText from '../core/GDSCText';
import GDSCModal from '../core/GDSCModal';
import GDSCButton from '../core/GDSCButton';

const Container = styled.div``;

export const TextType = {
  BOLD: 'Bold',
  REGULAR: 'Regular',
  MEDIUM: 'Medium',
  LIGHT: 'Light',
  UNDERLINE: 'Underline',
};

const ChartHeader = ({ headerText }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <div className="title">
        <GDSCText size={20} fontType={TextType.BOLD} color={Colors.WHITE100}>
          통장거래내역 추가
        </GDSCText>
      </div>
      <div onClick={() => setModalOpen(true)}>
        <GDSCText size={14} fontType={TextType.BOLD} color={Colors.BLACK100}>
          내역 추가
        </GDSCText>
      </div>
      <GDSCModal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <div style={{ width: '1088px', height: '638px', borderRadius: '20px' }}>s</div>
      </GDSCModal>
    </Container>
  );
};

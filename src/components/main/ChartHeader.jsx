import styled from 'styled-components';
import GDSCText, { TextType } from '../core/GDSCText';
import Colors from '../../style/Colors';
import GDSCButton from '../core/GDSCButton';
import GDSCModal from '../core/GDSCModal';
import React, { useState } from 'react';
import AccountModal from '../account/AccountModal';

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  padding: 0 12px;
  align-items: center;
  justify-content: space-between;

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;

const ChartHeader = ({ headerText }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <div className="title">
        <GDSCText size={22} fontType={TextType.BOLD} color={Colors.BLUE_DEEP}>
          KAIST 학부총학생회
        </GDSCText>
        <GDSCText size={22} fontType={TextType.BOLD} color={Colors.BLACK100}>
          {`23년도 상반기 ${headerText}`}
        </GDSCText>
      </div>
      <div onClick={() => setModalOpen(true)}>
        <GDSCText size={14} color={Colors.BLACK100}>
          <GDSCButton label={'+ 내역 추가'} />
        </GDSCText>
      </div>
      <GDSCModal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <AccountModal />
      </GDSCModal>
    </Container>
  );
};

export default ChartHeader;

import styled from 'styled-components';
import Colors from '../../../../style/Colors';
import GDSCText, { TextType } from '../../../../components/core/GDSCText';
import GDSCButton, { ButtonType } from '../../../../components/core/GDSCButton';
import { useState } from 'react';
import GDSCModal from '../../../../components/core/GDSCModal';
import OrgAccountModal from './OrgAccountModal';
import OrgAccountDetailItem from '../../../../components/main/dashboard/OrgAccountDetailItem';

const Container = styled.div`
  flex-grow: 1;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.WHITE100};
  border-radius: 8px;
  padding: 32px;
  gap: 32px;
`;

const Cell = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .title-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const AccountList = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 8px;
  overflow-x: auto;
`;

const EmptyDesc = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OrgAccountCard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <Cell>
        <div className="title-row">
          <GDSCText size={20} fontType={TextType.BOLD}>
            계좌번호
          </GDSCText>
          <GDSCButton label={'+ 계좌번호 추가하기'} onClick={() => setModalOpen(true)} buttonType={ButtonType.NORMAL} />
        </div>
        <EmptyDesc>
          <GDSCText size={14} fontType={TextType.MEDIUM}>
            등록된 계좌번호가 없습니다
          </GDSCText>
        </EmptyDesc>
        {/* <AccountList>
          <OrgAccountDetailItem nickname={'주거래계좌'} bankName={'우리은행'} accountNumber={'000-000-00-000'} />
        </AccountList> */}
        <GDSCModal open={isModalOpen} onClose={() => setModalOpen(false)}>
          <OrgAccountModal onClose={() => setModalOpen(false)} />
        </GDSCModal>
      </Cell>
      <Cell>
        <div className="title-row">
          <GDSCText size={20} fontType={TextType.BOLD}>
            카드
          </GDSCText>
          <GDSCButton label={'+ 카드정보 추가하기'} onClick={() => {}} buttonType={ButtonType.NORMAL} />
        </div>
        <EmptyDesc>
          <GDSCText size={14} fontType={TextType.MEDIUM}>
            등록된 카드 정보가 없습니다
          </GDSCText>
        </EmptyDesc>
      </Cell>
    </Container>
  );
};

export default OrgAccountCard;

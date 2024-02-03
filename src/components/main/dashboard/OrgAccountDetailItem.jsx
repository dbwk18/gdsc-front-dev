import styled from 'styled-components';
import GDSCText, { TextType } from '../../core/GDSCText';
import Colors from '../../../style/Colors';
import { useState } from 'react';
import GDSCModal from '../../core/GDSCModal';
import OrgAccountEditModal from '../../../templates/main/dashboard/organization/OrgAccountEditModal';

const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

const Header = styled.div`
  padding: 16px 12px 8px 12px;
`;

const Content = styled.div`
  padding: 8px 12px 16px 12px;
  background-color: ${Colors.GREY20};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const OrgAccountDetailItem = ({ id, nickname, bankName, accountNumber, accountOwner, refresh }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  return (
    <Container onClick={() => setEditModalOpen(true)}>
      <Header>
        <GDSCText size={14} fontType={TextType.MEDIUM}>
          {nickname}
        </GDSCText>
      </Header>
      <Content>
        <GDSCText size={12} fontType={TextType.MEDIUM}>
          {bankName}
        </GDSCText>
        <GDSCText size={12} fontType={TextType.MEDIUM}>
          {accountNumber}
        </GDSCText>
      </Content>
      <GDSCModal
        open={isEditModalOpen}
        onClose={e => {
          e.stopPropagation();
          setEditModalOpen(false);
        }}
      >
        <OrgAccountEditModal
          accountId={id}
          name={nickname}
          bank={bankName}
          accountNumber={accountNumber}
          accountOwner={accountOwner}
          refresh={refresh}
          onClose={() => setEditModalOpen(false)}
        />
      </GDSCModal>
    </Container>
  );
};

export default OrgAccountDetailItem;

import OrgTable from '../../../../components/main/dashboard/OrgTable';
import GDSCText, { TextType } from '../../../../components/core/GDSCText';
import Colors from '../../../../style/Colors';
import styled from 'styled-components';
import GDSCPagination from '../../../../components/core/GDSCPagination';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${Colors.WHITE100};
  border-radius: 8px;
  gap: 32px;
`;

const PaginationContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: right;
  background-color: ${Colors.GREY20};
`;

const COUNT_PER_PAGE = 12;

const AdminOrgList = ({ orgs, setModalOpen }) => {
  const [page, setPage] = useState(1);
  return (
    <Container>
      <GDSCText size={24} fontType={TextType.BOLD}>
        {'피감기관 목록'}
      </GDSCText>
      <OrgTable orgs={orgs} setModalOpen={setModalOpen} />
      <PaginationContainer>
        <GDSCPagination count={Math.ceil(orgs.length / COUNT_PER_PAGE)} page={page} setPage={setPage} />
      </PaginationContainer>
    </Container>
  );
};

export default AdminOrgList;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Table, TableHead, TableBody } from '@mui/material';
import OrgTableRow from './OrgTableRow';
import OrgTableChartHeader from './OrgTableChartHeader';
import BudgetPeriodDialogToast from './BudgetPeriodDialogToast';

const Container = styled.div`
  width: 100%;
  padding: 0 12px;
`;

const OrgTable = ({ orgs }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrgName, setSelectedOrgName] = useState('');

  return (
    <Container>
      {orgs && (
        <Table>
          <TableHead>
            <OrgTableChartHeader columnName={['피감기관명', '이메일', '카드 제출', '수정 권한 여부']} />
          </TableHead>
          <TableBody>
            {orgs.map(org => {
              return (
                <OrgTableRow
                  key={org.id}
                  orgName={org.organization_name}
                  orgEmail={org.email}
                  orgCardPDF={org.card}
                  orgEditPermission={false}
                  setIsModalOpen={setIsModalOpen}
                  setSelectedOrgName={setSelectedOrgName}
                />
              );
            })}
          </TableBody>
        </Table>
      )}
      <BudgetPeriodDialogToast
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isIndividual
        orgName={selectedOrgName}
      />
    </Container>
  );
};

export default OrgTable;

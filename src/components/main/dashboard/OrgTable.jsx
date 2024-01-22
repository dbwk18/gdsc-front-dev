import React from 'react';
import styled from 'styled-components';
import { Table, TableHead, TableBody } from '@mui/material';
import OrgTableRow from './OrgTableRow';
import OrgTableChartHeader from './OrgTableChartHeader';

const Container = styled.div`
  width: 100%;
  /* height: 1080px; */
  padding: 0 12px;
`;

const OrgTable = ({ orgs }) => {
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
                />
              );
            })}
          </TableBody>
        </Table>
      )}
    </Container>
  );
};

export default OrgTable;

import React from 'react';
import styled from 'styled-components';
import { Table, TableHead, TableBody, StyledEngineProvider } from '@mui/material';
import OrgManageRow from './OrgManageRow';
import OrgManageChartHeader from './OrgManageChartHeader';

const Container = styled.div`
  width: 100%;
  /* height: 1080px; */
  padding: 0 12px;
`;

const columnName = ['피감기관명', '이메일', '아이디', '비밀번호', '계정 상태'];

const OrgManageChart = ({ account, addRow, page }) => {
  return (
    <StyledEngineProvider injectFirst>
      <Container>
        <Table>
          <TableHead>
            <OrgManageChartHeader columnName={columnName} />
          </TableHead>
          <TableBody>
            {account.map((input, idx) => {
              return (
                <OrgManageRow
                  organisation={input.organisation}
                  email={input.email}
                  id={input.id}
                  password={input.password}
                  accountStatus={input.accountStatus}
                />
              );
            })}
          </TableBody>
        </Table>
      </Container>
    </StyledEngineProvider>
  );
};

export default OrgManageChart;

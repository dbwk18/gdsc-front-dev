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

const columnName = ['피감기관명', '이메일', '비밀번호', '계정 상태'];

const OrgManageChart = ({ orgs }) => {
  return (
    <StyledEngineProvider injectFirst>
      <Container>
        <Table>
          <TableHead>
            <OrgManageChartHeader columnName={columnName} />
          </TableHead>
          <TableBody>
            {orgs.map((input, idx) => {
              return (
                <OrgManageRow
                  organisation={input.organization_name}
                  email={input.email}
                  password={input.password}
                  isDisabled={input.isDisabled}
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

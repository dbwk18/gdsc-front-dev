import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@mui/material';
import styled from 'styled-components';
import { StyledEngineProvider } from '@mui/styled-engine';
import SettlementJson from '../jsonFile/settlement.json';

const MyTableHead = styled(TableHead)`
  background-color: rgba(232, 241, 255, 1);
`;

function DataTable() {
  return (
    <StyledEngineProvider>
      <TableContainer>
        <Table>
          <MyTableHead>
            <TableRow>
              <TableCell> </TableCell>
              <TableCell>예산</TableCell>
              <TableCell>결산</TableCell>
              <TableCell>집행률</TableCell>
            </TableRow>
          </MyTableHead>
          <TableBody>
            {SettlementJson.components.map(item => (
              <TableRow>
                <TableCell>{item.type}</TableCell>
                <TableCell>￦{item.budget}</TableCell>
                <TableCell>￦{item.settlement}</TableCell>
                <TableCell>{item.execute_rate}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <MyTableHead>
            <TableRow>
              <TableCell>총계</TableCell>
              <TableCell />
              <TableCell>￦1000</TableCell>
              <TableCell>100%</TableCell>
            </TableRow>
          </MyTableHead>
        </Table>
      </TableContainer>
    </StyledEngineProvider>
  );
}

export default DataTable;

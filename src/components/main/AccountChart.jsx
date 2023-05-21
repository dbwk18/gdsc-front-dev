import React from 'react';
import styled from 'styled-components';
import { Table, TableHead, TableBody, TableCell, tableCellClasses, StyledEngineProvider } from '@mui/material';
import Colors from '../../style/Colors';
import AccountCell from './AccountCell';

const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  padding: 0 12px;
`;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: Colors.BLUE_LIGHT,
    color: 'black',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const AccountChart = ({ account }) => {
  return (
    <StyledEngineProvider injectFirst>
      <Container>
        <Table>
          <TableHead>
            <StyledTableCell>사업일</StyledTableCell>
            <StyledTableCell>담당자</StyledTableCell>
            <StyledTableCell>집행내용</StyledTableCell>
            <StyledTableCell>코드</StyledTableCell>
            <StyledTableCell>거래형태</StyledTableCell>
            <StyledTableCell>수입</StyledTableCell>
            <StyledTableCell>지출</StyledTableCell>
            <StyledTableCell>잔액</StyledTableCell>
            <StyledTableCell>통장거래일</StyledTableCell>
            <StyledTableCell>이체계좌번호</StyledTableCell>
            <StyledTableCell>영수증</StyledTableCell>
            <StyledTableCell>비고</StyledTableCell>
          </TableHead>
          <TableBody>
            {account.map(c => {
              return (
                <AccountCell
                  businessat={c.business_at}
                  manager={c.manager}
                  itemsub={c.item_sub}
                  itemcode={c.item_code}
                  transactiontype={c.transaction_type}
                  income={c.income}
                  expense={c.expense}
                  balance={c.balance}
                  transactionat={c.transaction_at}
                  bankname={c.bank_name}
                  receipts={c.receipts}
                  remarks={c.remarks}
                />
              );
            })}
          </TableBody>
        </Table>
      </Container>
    </StyledEngineProvider>
  );
};

export default AccountChart;

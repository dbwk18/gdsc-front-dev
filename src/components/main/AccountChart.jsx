import React from 'react';
import styled from 'styled-components';
import { Table, TableHead, TableBody, TableCell, tableCellClasses, StyledEngineProvider } from '@mui/material';
import Colors from '../../style/Colors';
import AccountCell from './AccountCell';
import GDSCText from '../core/GDSCText';

const Container = styled.div`
  width: 100%;
  height: 700px;
  padding: 0 12px;
`;

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: Colors.BLUE_LIGHT,
    color: 'black',
  },
}));

const AccountChart = ({ account }) => {
  return (
    <StyledEngineProvider injectFirst>
      <Container>
        <Table>
          <TableHead>
            <StyledTableCell>
              <GDSCText size={15}>사업일</GDSCText>
            </StyledTableCell>
            <StyledTableCell>
              <GDSCText size={15}>담당자</GDSCText>
            </StyledTableCell>
            <StyledTableCell>
              <GDSCText size={15}>집행내용</GDSCText>
            </StyledTableCell>
            <StyledTableCell>
              <GDSCText size={15}>코드</GDSCText>
            </StyledTableCell>
            <StyledTableCell>
              <GDSCText size={15}>거래형태</GDSCText>
            </StyledTableCell>
            <StyledTableCell>
              <GDSCText size={15}>수입</GDSCText>
            </StyledTableCell>
            <StyledTableCell>
              <GDSCText size={15}>지출</GDSCText>
            </StyledTableCell>
            <StyledTableCell>
              <GDSCText size={15}>잔액</GDSCText>
            </StyledTableCell>
            <StyledTableCell>
              <GDSCText size={15}>통장거래일</GDSCText>
            </StyledTableCell>
            <StyledTableCell>
              <GDSCText size={15}>이체계좌번호</GDSCText>
            </StyledTableCell>
            <StyledTableCell>
              <GDSCText size={15}>영수증</GDSCText>
            </StyledTableCell>
            <StyledTableCell>
              <GDSCText size={15}>비고</GDSCText>
            </StyledTableCell>
          </TableHead>
          <TableBody>
            {account.map(c => {
              return (
                <AccountCell
                  businessAt={c.business_at}
                  manager={c.manager}
                  itemSub={c.item_sub}
                  itemCode={c.item_code}
                  transactionType={c.transaction_type}
                  income={c.income}
                  expense={c.expense}
                  balance={c.balance}
                  transactionAt={c.transaction_at}
                  bankName={c.bank_name}
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

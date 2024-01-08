import React from 'react';
import styled from 'styled-components';
import { Table, TableHead, TableBody, StyledEngineProvider } from '@mui/material';
import AccountRow from './AccountRow';
import AccountChartHeader from './AccountChartHeader';

const Container = styled.div`
  width: 100%;
  padding: 0 12px;
  height: 700px;
  overflow-y: scroll;
`;

const columnName = [
  '사업일',
  '담당자',
  '집행내용',
  '코드',
  '거래형태',
  '수입',
  '지출',
  '잔액',
  '통장거래일',
  '이체계좌번호',
  '영수증',
  '비고',
];

const AccountChart = ({ accountData, addRow, page }) => {
  return (
    <StyledEngineProvider injectFirst>
      <Container>
        <Table stickyHeader>
          <TableHead sx={{ position: 'sticky' }}>
            <AccountChartHeader columnName={columnName} />
          </TableHead>
          <TableBody>
            {accountData.map((input, idx) => {
              return (
                <AccountRow
                  businessAt={input.business_at}
                  manager={input.manager}
                  itemSub={input.item_sub}
                  itemCode={input.item_code}
                  transactionType={input.transaction_type}
                  income={input.income}
                  expense={input.expense}
                  balance={input.balance}
                  transactionAt={input.transaction_at}
                  bankName={input.bank_name}
                  accountHolder={input.account_holder}
                  accountNumber={input.account_number}
                  receipts={input.receipts}
                  remarks={input.remarks}
                  highlight={input === addRow[0]}
                  page={page}
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

import React from 'react';
import styled from 'styled-components';
import { Table, TableHead, TableBody, StyledEngineProvider } from '@mui/material';
import AccountCell from './AccountCell';
import AccountChartHeader from './AccountChartHeader';

const Container = styled.div`
  width: 100%;
  height: 700px;
  padding: 0 12px;

  .centered {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const AccountChart = ({ account }) => {
  return (
    <StyledEngineProvider injectFirst>
      <Container>
        <Table>
          <TableHead>
            <AccountChartHeader title={'사업일'} />
            <AccountChartHeader title={'담당자'} />
            <AccountChartHeader title={'집행내용'} />
            <AccountChartHeader title={'코드'} />
            <AccountChartHeader title={'거래형태'} />
            <AccountChartHeader title={'수입'} />
            <AccountChartHeader title={'지출'} />
            <AccountChartHeader title={'잔액'} />
            <AccountChartHeader title={'통장거래일'} />
            <AccountChartHeader title={'이체계좌번호'} />
            <AccountChartHeader title={'영수증'} />
            <AccountChartHeader title={'비고'} />
          </TableHead>
          <TableBody>
            {account.map(input => {
              return (
                <AccountCell
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

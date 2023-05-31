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

  .centered {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
              <div className="centered">
                <GDSCText size={12}>사업일</GDSCText>
              </div>
            </StyledTableCell>
            <StyledTableCell>
              <div className="centered">
                <GDSCText size={12}>담당자</GDSCText>
              </div>
            </StyledTableCell>
            <StyledTableCell>
              <div className="centered">
                <GDSCText size={12}>집행내용</GDSCText>
              </div>
            </StyledTableCell>
            <StyledTableCell>
              <div className="centered">
                <GDSCText size={12}>코드</GDSCText>
              </div>
            </StyledTableCell>
            <StyledTableCell>
              <div className="centered">
                <GDSCText size={12}>거래형태</GDSCText>
              </div>
            </StyledTableCell>
            <StyledTableCell>
              <div className="centered">
                <GDSCText size={12}>수입</GDSCText>
              </div>
            </StyledTableCell>
            <StyledTableCell>
              <div className="centered">
                <GDSCText size={12}>지출</GDSCText>
              </div>
            </StyledTableCell>
            <StyledTableCell>
              <div className="centered">
                <GDSCText size={12}>잔액</GDSCText>
              </div>
            </StyledTableCell>
            <StyledTableCell>
              <div className="centered">
                <GDSCText size={12}>통장거래일</GDSCText>
              </div>
            </StyledTableCell>
            <StyledTableCell>
              <div className="centered">
                <GDSCText size={12}>이체계좌번호</GDSCText>
              </div>
            </StyledTableCell>
            <StyledTableCell>
              <div className="centered">
                <GDSCText size={12}>영수증</GDSCText>
              </div>
            </StyledTableCell>
            <StyledTableCell>
              <div className="centered">
                <GDSCText size={12}>비고</GDSCText>
              </div>
            </StyledTableCell>
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

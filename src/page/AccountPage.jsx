import { useState } from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';
import ChartHeader from '../components/main/ChartHeader';
import AccountChart from '../components/main/account/AccountChart';
import GDSCModal from '../components/core/GDSCModal';
import AccountModal from '../components/main/account/AccountModal';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.WHITE100};
  border-radius: 16px;
  padding: 20px 30px;
`;

const toydata = [
  {
    business_at: '20230510',
    manager: '기획국',
    item_sub: '학과 설명회',
    item_code: 'A1',
    transaction_type: '계좌 이체',
    income: 'd',
    expense: '100000',
    balance: '3700000',
    transaction_at: '20230715',
    bank_name: '농협',
    account_number: '34002190674',
    account_holder: '변경호',
    receipts: 'www.example.com/receipt1',
    remarks: 'memo',
  },
  {
    business_at: '20230510',
    manager: '기획국',
    item_sub: '학과 설명회',
    item_code: 'A1',
    transaction_type: '계좌 이체',
    income: 'd',
    expense: '100000',
    balance: '3700000',
    transaction_at: '20230715',
    bank_name: '농협',
    account_number: '34002190674',
    account_holder: '변경호',
    receipts: 'www.example.com/receipt1',
    remarks: 'memo',
  },
  {
    business_at: '20230510',
    manager: '기획국',
    item_sub: '학과 설명회',
    item_code: 'A1',
    transaction_type: '계좌 이체',
    income: 'd',
    expense: '100000',
    balance: '3700000',
    transaction_at: '20230715',
    bank_name: '농협',
    account_number: '34002190674',
    account_holder: '변경호',
    receipts: 'www.example.com/receipt1',
    remarks: 'memo',
  },
];

const AccountPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <ChartHeader headerText={'통장거래내역!'} setIsOpen={setIsOpen} />
      <AccountChart account={toydata} />
      <GDSCModal open={isOpen} onClose={() => setIsOpen(false)}>
        <AccountModal setIsOpen={setIsOpen} />
      </GDSCModal>
    </Container>
  );
};

export default AccountPage;

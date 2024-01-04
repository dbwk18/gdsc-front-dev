import { useState } from 'react';
import styled from 'styled-components';
import GDSCText, { TextType } from '../../core/GDSCText';
import GDSCButton from '../../core/GDSCButton';
import Colors from '../../../style/Colors';
import { TextField } from '@mui/material';

const Container = styled.div`
  display: flex;
  width: 450px;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.WHITE100};
`;

const Header = styled.div`
  height: 80px;
  width: 450px;
  display: flex;
  padding: 0px 40px;
  justify-content: space-between;
  flex-shrink: 0;
  align-items: center;
  background-color: ${Colors.GREY20};
`;

const Contents = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  align-self: stretch;
  padding: 0px 40px;
  justify-content: space-between;
  overflow-y: scroll;
`;

const ButtonRow = styled.div`
  height: 100px;
  display: flex;
  position: sticky;
  padding: 0 40px;
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
`;

const ContentsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding: 40px;
  flex: 1 0 0;
`;

const StyledTextField = styled(TextField)`
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  width: 100%;
  height: 80px;
`;

const ImgField = styled.div`
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  width: 274px;
  height: 163px;
`;

const AccountModal = ({ setIsOpen, setAddRow, setToastOpen }) => {
  const [businessDate, setBusinessDate] = useState('');
  const [manager, setManager] = useState('');
  const [itemSub, setItemSub] = useState('');
  const [itemCode, setItemCode] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');
  const [balance, setBalance] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [receipts, setReceipts] = useState('');
  const [remarks, setRemarks] = useState('');

  return (
    <Container>
      <Header>
        <GDSCText size={20} fontType={TextType.BOLD} color={Colors.BLACK100}>
          통장거래내역 추가
        </GDSCText>
      </Header>
      <Contents>
        <ContentsColumn>
          <StyledTextField label="사업일" value={businessDate} onChange={e => setBusinessDate(e.target.value)} />
          <StyledTextField label="담당자" value={manager} onChange={e => setManager(e.target.value)} />
          <StyledTextField label="집행내용" value={itemSub} onChange={e => setItemSub(e.target.value)} />
          <StyledTextField label="코드" value={itemCode} onChange={e => setItemCode(e.target.value)} />
          <StyledTextField
            label="거래형태"
            value={transactionType}
            onChange={e => setTransactionType(e.target.value)}
          />
          <StyledTextField label="수입" value={income} onChange={e => setIncome(e.target.value)} />
          <StyledTextField label="지출" value={expense} onChange={e => setExpense(e.target.value)} />
          <StyledTextField label="잔액" value={balance} onChange={e => setBalance(e.target.value)} />
          <StyledTextField
            label="통장거래일"
            value={transactionDate}
            onChange={e => setTransactionDate(e.target.value)}
          />
          <StyledTextField label="은행명" value={bankName} onChange={e => setBankName(e.target.value)} />
          <StyledTextField label="예금주" value={accountHolder} onChange={e => setAccountHolder(e.target.value)} />
          <StyledTextField
            label="이체계좌번호"
            value={accountNumber}
            onChange={e => setAccountNumber(e.target.value)}
          />
          <StyledTextField label="영수증" value={receipts} onChange={e => setReceipts(e.target.value)} />
          <StyledTextField label="비고" value={remarks} onChange={e => setRemarks(e.target.value)} />
        </ContentsColumn>
      </Contents>
      <ButtonRow>
        <GDSCButton
          label={'닫기'}
          onClick={() => {
            setIsOpen(false);
          }}
          inactive={false}
          buttonType="sub"
        />
        <GDSCButton
          label={'등록'}
          onClick={() => {
            setIsOpen(false);
            setToastOpen(true);
            setAddRow([
              {
                business_at: businessDate,
                manager,
                item_sub: itemSub,
                item_code: itemCode,
                transaction_type: transactionType,
                income,
                expense,
                balance,
                transaction_at: transactionDate,
                bank_name: bankName,
                account_holder: accountHolder,
                account_number: accountNumber,
                receipts,
                remarks,
              },
              // todo:  add api post
            ]);
          }}
          inactive={false}
        />
      </ButtonRow>
    </Container>
  );
};

export default AccountModal;

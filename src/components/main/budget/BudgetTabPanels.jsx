import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from '@mui/material';
import styled from 'styled-components';
import Colors from '../../../style/Colors';
import IncomeTable from './IncomeTable';
import ExpenseTable from './ExpenseTable';
import SettlementTable from './SettlementTable';
import Axios from 'axios';
import { getForBudget } from '../../../network/HttpRequests';
import GDSCText, { TextType } from '../../core/GDSCText';

const LineGrey = styled.div`
  width: 100%;
  height: 2px;
  display: flex;
`;

const LineWhite = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
`;

const StyledTab = styled.Tab`
  padding: 0;
  min-width: 0;
  margin-right: 1;
`;

const TabPanels = ({ addRow }) => {
  const [activeTab, setActiveTab] = useState('INCOME');
  const [incomeData, setIncomeData] = useState(null);
  const [expenseData, setExpenseData] = useState(null);
  const [totalData, setTotalData] = useState(null);

  // todo: 해당연도/분기에 맞게끔 초기화
  const [orgId, setOrgId] = useState(4);
  const [year, setYear] = useState(2023);
  const [half, setHalf] = useState('spring');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  useEffect(() => {
    getForBudget(`/budgets/income/${orgId}/${year}/${half}`).then(response => {
      setIncomeData(response);
    });
    getForBudget(`/budgets/expense/${orgId}/${year}/${half}`).then(response => {
      setExpenseData(response);
    });
    getForBudget(`/budgets/total/${orgId}/${year}/${half}`).then(response => {
      setTotalData(response);
    });
  }, []);

  return (
    <div>
      <div>
        <Tabs
          value={activeTab}
          TabIndicatorProps={{
            style: {
              height: '3px',
              backgroundColor: Colors.BLACK100,
              borderRadius: '30px',
            },
          }}
        >
          <StyledTab
            disableIndicator
            label={
              <GDSCText
                size={20}
                fontType={TextType.BOLD}
                color={activeTab === 'INCOME' ? Colors.BLACK100 : Colors.GREY40}
              >
                수입
              </GDSCText>
            }
            value="INCOME"
            onClick={() => handleTabClick('INCOME')}
          />
          <StyledTab
            disableIndicator
            label={
              <GDSCText
                size={20}
                fontType={TextType.BOLD}
                color={activeTab === 'EXPENSE' ? Colors.BLACK100 : Colors.GREY40}
              >
                지출
              </GDSCText>
            }
            value="EXPENSE"
            onClick={() => handleTabClick('EXPENSE')}
          />
          <StyledTab
            disableIndicator
            label={
              <GDSCText
                size={20}
                fontType={TextType.BOLD}
                color={activeTab === 'SETTLEMENT' ? Colors.BLACK100 : Colors.GREY40}
              >
                결산
              </GDSCText>
            }
            value="SETTLEMENT"
            onClick={() => handleTabClick('SETTLEMENT')}
          />
        </Tabs>
        {/* <LineGrey style={{ backgroundColor: Colors.GREY40 }} /> */}
        <LineWhite style={{ backgroundColor: Colors.WHITE100 }} />
      </div>

      {activeTab === 'INCOME' && <IncomeTable incomeData={incomeData} addRow={addRow} />}
      {activeTab === 'EXPENSE' && <ExpenseTable expenseData={expenseData} />}
      {activeTab === 'SETTLEMENT' && <SettlementTable totalData={totalData} />}
    </div>
  );
};

export default TabPanels;

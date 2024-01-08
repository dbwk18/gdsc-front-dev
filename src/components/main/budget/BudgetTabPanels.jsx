import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from '@mui/material';
import styled from 'styled-components';
import Colors from '../../../style/Colors';
import IncomeTable from './IncomeTable';
import ExpenseTable from './ExpenseTable';
import SettlementTabel from './SettlementTable';
import Axios from 'axios';
import { ContentPasteOffOutlined } from '@mui/icons-material';

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

  const getIncomeData = async () => {
    try {
      const response = await Axios.get(`${process.env.REACT_APP_SERVER_URL}/budgets/income/${orgId}/${year}/${half}`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.log('error: income get api', error);
    }
  };

  const getExpenseData = async () => {
    try {
      const response = await Axios.get(`${process.env.REACT_APP_SERVER_URL}/budgets/expense/${orgId}/${year}/${half}`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        setExpenseData(response.data);
      }
    } catch (error) {
      console.log('error: expense get api', error);
    }
  };

  const getTotalData = async () => {
    try {
      const response = await Axios.get(`${process.env.REACT_APP_SERVER_URL}/budgets/total/${orgId}/${year}/${half}`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        setTotalData(response.data);
      }
    } catch (error) {
      console.log('error: total get api', error);
    }
  };

  useEffect(() => {
    getIncomeData();
    getExpenseData();
    getTotalData();
  }, []);

  return (
    <div>
      <div>
        <Tabs value={activeTab}>
          <Tab disableIndicator label="수입" value="INCOME" onClick={() => handleTabClick('INCOME')} />
          <Tab disableIndicator label="지출" value="EXPENSE" onClick={() => handleTabClick('EXPENSE')} />
          <Tab disableIndicator label="결산" value="SETTLEMENT" onClick={() => handleTabClick('SETTLEMENT')} />
        </Tabs>
        <LineGrey style={{ backgroundColor: Colors.GREY40 }} />
        <LineWhite style={{ backgroundColor: Colors.WHITE100 }} />
      </div>

      {activeTab === 'INCOME' && <IncomeTable incomeData={incomeData} addRow={addRow} />}
      {activeTab === 'EXPENSE' && <ExpenseTable expenseData={expenseData} />}
      {activeTab === 'SETTLEMENT' && <SettlementTabel totalData={totalData} />}
    </div>
  );
};

export default TabPanels;

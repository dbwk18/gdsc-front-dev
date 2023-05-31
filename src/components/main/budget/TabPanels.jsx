import * as React from 'react';
import { useState } from 'react';
import IncomeTable from './IncomeTable';
import ExpenseTable from './ExpenseTable';
import SettlementTable from './SettlementTable';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from 'styled-components';
import Colors from '../../../style/Colors';

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

const TabPanels = () => {
  const [activeTab, setActiveTab] = useState('INCOME');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <Tabs value={activeTab}>
          <Tab label="예산" value="INCOME" onClick={() => handleTabClick('INCOME')} />
          <Tab label="지출" value="EXPENSE" onClick={() => handleTabClick('EXPENSE')} />
          <Tab label="결산" value="SETTLEMENT" onClick={() => handleTabClick('SETTLEMENT')} />
        </Tabs>
        <LineGrey style={{ backgroundColor: Colors.GREY40 }} />
        <LineWhite style={{ backgroundColor: Colors.WHITE100 }} />
      </div>

      {activeTab === 'INCOME' && <IncomeTable />}
      {activeTab === 'EXPENSE' && <ExpenseTable />}
      {activeTab === 'SETTLEMENT' && <SettlementTable />}
    </div>
  );
};

// small test message

export default TabPanels;

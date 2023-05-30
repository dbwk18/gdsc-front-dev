import * as React from 'react';
import { useState } from 'react';
import IncomeTable from './IncomeTable';
import ExpenseTable from './ExpenseTable';
import SettlementTable from './SettlementTable';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('INCOME');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={() => handleTabClick('INCOME')}>
          예산
        </button>
        <button type="button" onClick={() => handleTabClick('EXPENSE')}>
          지출
        </button>
        <button type="button" onClick={() => handleTabClick('SETTLEMENT')}>
          결산
        </button>
      </div>

      {activeTab === 'INCOME' && <IncomeTable />}
      {activeTab === 'EXPENSE' && <ExpenseTable />}
      {activeTab === 'SETTLEMENT' && <SettlementTable />}
    </div>
  );
};

export default TabComponent;

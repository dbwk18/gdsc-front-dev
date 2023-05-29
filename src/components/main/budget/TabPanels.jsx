import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IncomeTable from './IncomeTable';
import ExpenseTable from './ExpenseTable';
import SettlementTable from './SettlementTable';
import Panel from './Panel';

const TabType = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
  SETTLEMENT: 'SETTLEMENT',
};

const TabPanels = () => {
  const [currTab, setCurrTab] = React.useState(0);

  const handleChange = (event, newTab) => {
    setCurrTab(newTab);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currTab} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{ color: 'red', fontWeight: 'bold' }} label="예산" />
          <Tab sx={{ color: 'red', fontWeight: 'bold' }} label="지출" />
          <Tab sx={{ color: 'red', fontWeight: 'bold' }} label="결산" />
        </Tabs>
      </Box>
      <Panel value={currTab} index={0}>
        <IncomeTable />
      </Panel>
      <Panel value={currTab} index={1}>
        <ExpenseTable />
      </Panel>
      <Panel value={currTab} index={2}>
        <SettlementTable />
      </Panel>
    </Box>
  );
};

export default TabPanels;

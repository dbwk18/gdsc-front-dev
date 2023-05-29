import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IncomeTable from './IncomeTable';
import ExpenseTable from './ExpenseTable';
import SettlementTable from './SettlementTable';
import Panel from './Panel';

const TapType = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
  SETTLEMENT: 'SETTLEMENT',
};

const TabPanels = () => {
  const [currTap, setCurrTap] = React.useState(0);

  const handleChange = (event, newTap) => {
    setCurrTap(newTap);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currTap} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{ color: 'red', fontWeight: 'bold' }} label="예산" />
          <Tab sx={{ color: 'red', fontWeight: 'bold' }} label="지출" />
          <Tab sx={{ color: 'red', fontWeight: 'bold' }} label="결산" />
        </Tabs>
      </Box>
      <Panel value={currTap} index={TapType.INCOME}>
        <IncomeTable />
      </Panel>
      <Panel value={currTap} index={TapType.EXPENSE}>
        <ExpenseTable />
      </Panel>
      <Panel value={currTap} index={TapType.SETTLEMENT}>
        <SettlementTable />
      </Panel>
    </Box>
  );
};

export default TabPanels;

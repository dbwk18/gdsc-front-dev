import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IncomeTable from './IncomeTable';
import ExpenseTable from './ExpenseTable';
import SettlementTable from './SettlementTable';
import Panel from './Panel';

export default function TabPanels() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="예산" />
          <Tab label="지출" />
          <Tab label="결산" />
        </Tabs>
      </Box>
      <Panel value={value} index={0}>
        <IncomeTable />
      </Panel>
      <Panel value={value} index={1}>
        <ExpenseTable />
      </Panel>
      <Panel value={value} index={2}>
        <SettlementTable />
      </Panel>
    </Box>
  );
}

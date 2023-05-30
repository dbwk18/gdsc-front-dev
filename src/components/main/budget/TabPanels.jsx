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

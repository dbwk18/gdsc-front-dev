import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { RootLayout, MainLayout } from './layout/index';
import BudgetPage from './BudgetPage';
import AccountPage from './AccountPage';
import OrgDashboardPage from './OrgDashboardPage';
import AdminDashboardPage from './AdminDashboardPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="main" element={<MainLayout />}>
        <Route path="budget" element={<BudgetPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="organization-dashboard" element={<OrgDashboardPage />} />
        <Route path="admin-dashboard" element={<AdminDashboardPage />} />
      </Route>
    </Route>,
  ),
);

export default router;

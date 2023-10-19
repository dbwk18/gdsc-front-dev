import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { RootLayout, MainLayout } from './layout/index';
import BudgetPage from './BudgetPage';
import AccountPage from './AccountPage';
import LoginPage from './LoginPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="login" element={<LoginPage />} />
      <Route path="main" element={<MainLayout />}>
        <Route path="budget" element={<BudgetPage />} />
        <Route path="account" element={<AccountPage />} />
      </Route>
    </Route>,
  ),
);

export default router;

import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { RootLayout, MainLayout } from '../templates/core/layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="main" element={<MainLayout />}>
        <Route path="budget" element={<div>예결산안</div>} />
        <Route path="account" element={<div>통장거래내역</div>} />
      </Route>
    </Route>,
  ),
);

export default router;

import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<div>hi</div>} />));

export default router;

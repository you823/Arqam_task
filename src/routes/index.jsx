// src/routes/index.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout.jsx';
import FinancialRatioPage from '../Pages/FinancialRatio/FinancialRatioPage.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to="financialRatios" replace />} />
        <Route path="financialRatios" element={<FinancialRatioPage />} />
        <Route path="*" element={<Navigate to="financialRatios" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
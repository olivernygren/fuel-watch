import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './index.css';
import { CalculatorPage } from './pages/calculator';
import { ThemeConfig } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeConfig>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<CalculatorPage />} key="1" />
      </Routes>
      </BrowserRouter>
    </ThemeConfig>
  </React.StrictMode>
);

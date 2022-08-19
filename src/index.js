import React from 'react';
import ReactDOM from 'react-dom/client';

import Root from './Pages/Root';

import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Root />} />
    </Routes>
  </BrowserRouter>
);

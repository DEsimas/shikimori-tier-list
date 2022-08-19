import React from 'react';
import ReactDOM from 'react-dom/client';

import Root from './Pages/Root';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

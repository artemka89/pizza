import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppProvider } from './providers/app-provider.tsx';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>,
);

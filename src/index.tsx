import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';
import { CurrencyProvider } from './CurrensyContext/CurrencyContext';

ReactDOM.render(
  <CurrencyProvider>
    <App />
  </CurrencyProvider>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LiffProvider } from 'react-liff';

const liffId = '1657335110-La01N5z1';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <LiffProvider liffId={liffId}>
      <App />
    </LiffProvider>
  </BrowserRouter>
);


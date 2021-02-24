import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartProvider } from './context'
import Learning from './Learning'
ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      {/* <Learning /> */}
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
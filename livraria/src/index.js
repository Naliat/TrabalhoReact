import React from 'react';
import ReactDOM from 'react-dom/client'; // Usando a nova API de renderização do React 18
import App from './App';
import { CartProvider } from './context/CartContext';
import { GlobalStyle } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <GlobalStyle />
      <App />
    </CartProvider>
  </React.StrictMode>
);

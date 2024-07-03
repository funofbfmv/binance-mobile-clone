import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; // Импортируйте ваш компонент страницы входа
import WalletOverview from './pages/WalletOverview'; // Импортируйте ваш компонент страницы обзора кошелька
import TransactionsPage from './pages/TransactionsPage';
import DepositPage from './pages/DepositPage';
import WithdrawCryptoPage from './pages/WithdrawCryptoPage';
import Chat from './pages/Chat';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/wallet" element={<WalletOverview />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/withdraw" element={<WithdrawCryptoPage />} />
        <Route path="/chat" element={<Chat />} />

      </Routes>
    </Router>
  );
};

export default App;
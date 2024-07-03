// src/pages/TransactionsPage.jsx

import React, { useState } from 'react';
import { FaFilter, FaCopy, FaLink } from 'react-icons/fa';  // Импортируем иконки

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      time: '2024-02-05 01:03',
      type: 'Ввод',
      wallet: 'Спотовый кошелек',
      amount: 211,
      recipient: 'TLCXU4...1k9eF',
      txid: '2831a4...07c1ce',
      status: 'Completed'
    },
    {
      id: 2,
      time: '2024-02-04 13:35',
      type: 'Ввод',
      wallet: 'Спотовый кошелек',
      amount: 1148,
      recipient: 'TLCXU4...1k9eF',
      txid: '981467...6b2db1',
      status: 'Completed'
    },
    {
      id: 3,
      time: '2024-02-02 15:05',
      type: 'Ввод',
      wallet: 'Спотовый кошелек',
      amount: 402.46,
      recipient: 'TLCXU4...1k9eF',
      txid: '...6b2db1',
      status: 'Completed'
    }
  ]);

  return (
    <div className="min-h-screen bg-binanceBackground text-white font-regular p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">История транзакций</h2>
          <FaFilter className="text-yellow-500" />  {/* Иконка справа */}
        </div>
        <div className="flex space-x-4 mb-4">
          <button className="px-3 py-1 bg-zinc-800 rounded text-yellow-500">Криптовалюты</button>
          <button className="px-3 py-1 bg-zinc-800 rounded">Перевод</button>
          <button className="px-3 py-1 bg-zinc-800 rounded">Дистрибуция</button>
          {/* <button className="px-3 py-1 bg-zinc-800 rounded">Конвертация</button> */}
        </div>
        <div className="flex justify-start mb-4">
          <button className="px-3 py-1 bg-zinc-700 rounded text-white">Средства не поступили?</button>
        </div>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="bg-binanceBackground p-4 rounded-lg shadow-">
              <div className="text-white mb-4">USDT</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-400">Время</div>
                <div className="text-sm flex justify-end">{transaction.time}</div>
                <div className="text-sm text-gray-400">Сумма</div>
                <div className="text-sm flex justify-end">{transaction.amount}</div>
                <div className="text-sm text-gray-400">Перевод</div>
                <div className="text-sm flex justify-end">{transaction.type}</div>
                <div className="text-sm text-gray-400">Кошелек для ввода</div>
                <div className="text-sm flex justify-end">{transaction.wallet}</div>
                <div className="text-sm text-gray-400">Адресат</div>
                <div className="text-sm flex items-center flex justify-end">
                  {transaction.recipient} 
                  <FaLink className="ml-2 cursor-pointer" title="Скопировать ссылку" /><FaCopy className="ml-2 cursor-pointer" title="Скопировать" />
                </div>
                <div className="text-sm text-gray-400">TxID</div>
                <div className="text-sm flex items-center flex justify-end">
                  {transaction.txid} 
                  <FaLink className="ml-2 cursor-pointer" title="Скопировать ссылку" /><FaCopy className="ml-2 cursor-pointer" title="Скопировать" />
                </div>
                <div className="text-sm text-gray-400">Статус</div>
                <div className="text-sm flex justify-end">{transaction.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
// src/pages/DepositPage.jsx

import React from 'react';
import { FaSearch } from "react-icons/fa";
import Header from '../components/Header/Header';
import bitIcon from '../assets/wallet/bitcoin_14446133.png';
import tonIcon from '../assets/wallet/ton_14446264.png';
import usdtIcon from '../assets/wallet/usdt_14446252.png';
import shibIcon from '../assets/wallet/shiba-inu_14446234.png';
import etcIcon from '../assets/wallet/ethereum-classic_14446163.png'
import { FaFilter, FaCopy, FaLink, FaCheckCircle, FaChevronRight } from 'react-icons/fa';  // Импортируем иконки

const DepositPage = () => {
  const recentDeposits = [
    {
      id: 1,
      amount: 211,
      status: 'Completed',
      time: '2024-02-05 01:03',
      network: 'TRX',
      address: 'TLCXU4...1k9eF',
      txid: '2831a4...07c1ce',
      wallet: 'Спотовый кошелек'
    },
    {
      id: 2,
      amount: 1148,
      status: 'Completed',
      time: '2024-02-04 13:35',
      network: 'TRX',
      address: 'TLCXU4...1k9eF',
      txid: '981467...6b2db1',
      wallet: 'Спотовый кошелек'
    }
  ];

  return (
    <div className="min-h-screen bg-binanceBackground text-white font-regular p-2">
      <Header />
      <div className="max-w-3xl mx-auto mt-4">
        {/* Выбор монеты */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className="flex items-center justify-center w-6 h-6 bg-yellow-500 rounded-full text-black mr-2">1</div>
            <h2 className="text-lg font-semibold">Выберите монету</h2>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            
            <input
              type="text"   
              placeholder="Поиск монет"
              className="flex-grow px-4 py-2 bg-gray-800 border-white rounded-md focus:outline-none"
            />
            <FaSearch className="text-gray-400" />
          </div>

          {/* <div className="flex flex-wrap gap-2">
            {['USDT', 'XRP', 'BTC', 'WLD', 'BNB'].map((coin) => (
              <button key={coin} className="px-3 py-1 bg-gray-700 rounded-md text-gray-100 mt-4">{coin}</button>
            ))}
          </div> */}

          <div className="flex flex-wrap gap-2">
            {[
              { name: 'USDT', icon: usdtIcon },
              { name: 'TON', icon: tonIcon },
              { name: 'BTC', icon: bitIcon },
              { name: 'Shib', icon: shibIcon },
              { name: 'ETC', icon: etcIcon }
            ].map((coin) => (
              <button key={coin.name} className="px-3 py-1 bg-gray-700 rounded-md text-gray-100 mt-4 flex items-center">
                <img src={coin.icon} alt={coin.name} className="w-4 h-4 mr-2" />
                <span>{coin.name}</span>
              </button>
            ))}
          </div>

        </div>

        {/* Шаги выбора сети и адреса */}
        <div className="mb-14">
          <div className="flex items-center mb-2">
            <div className="flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full text-black mr-2 text-gray-100">2</div>
            <h2 className="text-lg font-semibold text-gray-400">Выберите сеть</h2>
          </div>
          <div className="flex items-center mb-2">
            <div className="flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full text-black mr-2 text-gray-100">3</div>
            <h2 className="text-lg font-semibold text-gray-400">Адрес для пополнения</h2>
          </div>
        </div>

        {/* Недавний ввод средств */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">Недавний ввод средств</h2>
            <button className="flex items-center text-yellow-500">
              Подробнее <FaChevronRight className="ml-1" />
            </button>
          </div>
          <div className="space-y-6">
            {recentDeposits.map((deposit) => (
              <div key={deposit.id} className="bg-binanceBackground p-0 rounded-lg shadow-lg">
                <div className="flex items-center mb-2">
                  <span className="text-lg text-gray-2 font-bold">{deposit.amount} USDT</span>
                  <FaCheckCircle className="ml-1 text-green-500 w-3 h-3" />
                  <span className="ml-auto text-sm text-green-500">{deposit.status}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-sm">Время</div>
                  <div className="text-sm font-bold flex justify-end">{deposit.time}</div>
                  <div className="text-sm">Сеть</div>
                  <div className="text-sm font-bold flex justify-end">{deposit.network}</div>
                  <div className="text-sm">Адрес</div>
                  <div className="text-sm flex items-center font-bold flex justify-end">
                    {deposit.address}
                    <FaCopy className="ml-2 cursor-pointer" title="Скопировать" />
                  </div>
                  <div className="text-sm">TxID</div>
                  <div className="text-sm flex items-center font-bold flex justify-end">
                    {deposit.txid}
                    <FaLink className="ml-2 cursor-pointer" title="Скопировать ссылку" />
                  </div>
                  <div className="text-sm">Кошелек для ввода</div>
                  <div className="text-sm font-bold flex justify-end">{deposit.wallet}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
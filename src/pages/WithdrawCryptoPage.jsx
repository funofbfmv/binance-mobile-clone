// src/pages/WithdrawCryptoPage.jsx

import React from 'react';
import { FaCopy } from 'react-icons/fa';
import usdtIcon from "../assets/wallet/usdt_14446252.png"
import Header from '../components/Header/Header';

const WithdrawCryptoPage = () => {
  return (
    <div className="min-h-screen bg-binanceBackground text-white font-regular p-2">
        <Header/>
      <div className="max-w-3xl mx-auto">
      
        {/* Заголовок */}
        <h1 className="text-2xl font-semibold mb-6 ">Вывод криптовалюты</h1>

        {/* Монета */}
        <div className="mb-6">
          <label className="block text-md font-regular mb-2">Монета</label>
          <div className="flex items-center bg-gray-800 p-4 rounded">
            <img src={usdtIcon} alt="USDT" className="w-6 h-6 mr-2" />
            <span className="text-lg font-regular">USDT Tether US</span>
          </div>
        </div>

        {/* Горизонтальная меню */}
        <div className="mb-6">
          <div className="flex border-b-2 border-gray-800">
            <button className="text-lg px-4 py-2 border-b-2 border-yellow-500 focus:outline-none">Адрес</button>
            <button className="text-lg px-4 py-2 border-b-2 border-transparent focus:outline-none">Пользователь Binance</button>
          </div>
        </div>

        {/* Адрес (ввод) */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Адрес</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Введите адрес"
              className="w-full p-4 bg-gray-800 rounded focus:outline-none"
            />
            <FaCopy className="absolute right-4 top-4 text-yellow-500 cursor-pointer" />
          </div>
        </div>

        {/* Сеть */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Сеть</label>
          <select className="w-full p-4 bg-gray-800 rounded focus:outline-none">
            <option value="">Выберите сеть для вывода средств</option>
            {/* Добавьте дополнительные опции здесь */}
          </select>
        </div>

        {/* Информация о балансе и комиссии */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 p-4 rounded">
            <div className="text-sm">Баланс USDT</div>
            <div className="text-lg">0 USDT</div>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <div className="text-sm">Минимальная сумма вывода</div>
            <div className="text-lg">0.29 USDT</div>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <div className="text-sm">Комиссия сети</div>
            <div className="text-lg">0.15 - 8 USDT</div>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <div className="text-sm">Остаток суточного лимита</div>
            <div className="text-lg">8 000 000,0 USDT/8 000 000,0 USDT</div>
          </div>
        </div>

        {/* Недавние выводы */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Недавние выводы</h2>
          <div className="bg-gray-800 p-4 rounded mb-4">
            <input type="checkbox" id="hideErrors" className="mr-2" />
            <label htmlFor="hideErrors" className="text-sm">Спрятать уведомление об ошибках</label>
          </div>
          <div className="flex items-center bg-gray-800 p-4 rounded mb-4">
            <button className="bg-yellow-500 px-4 py-2 rounded text-black mr-4">Крипто-адрес</button>
            <span className="text-lg">Пользователь Binance</span>
          </div>
          <div className="text-center">
            <img src="/path/to/no-records-icon.png" alt="No Records" className="w-12 h-12 mx-auto mb-2" />
            <div className="text-sm">Нет записей о последних выводах.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawCryptoPage;
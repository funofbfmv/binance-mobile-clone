import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import user1Avatar from '../assets/logo/images/brand.png'
import user2Avatar from '../assets/avatar/businessman_206853.png'

const socket = io('http://localhost:3003');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const id = prompt("Введите ваш ID пользователя (например, user1 или user2):");
    setUserId(id);

    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = () => {
    if (input) {
      socket.emit('chat message', { text: input, userId });
      setInput('');
    }
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-6 border flex flex-col flex-grow">
        <div className="flex p-4 border-b items-center">
          <img className="h-12 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png" alt="Binance Logo" />
          <div className="ml-4">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Служба поддержки Binance</div>
            <p className="mt-2 text-gray-500">Case ID #117223976</p>
          </div>
        </div>
        <div className="p-4 border-b">
          <p className="mt-2 text-gray-500">Функция вывода средств приостановлена</p>
        </div>
        <div className="p-4 flex-grow overflow-y-auto">
          <div className="text-blue-600 mb-4">🛈 Вы можете проверить существуют ли ограничения на снятие средств для определенной криптовалюты, выбрав интересующий вас токен на странице вывода, к примеру <span className="font-bold">"BTC"</span></div>
          {messages.map((msg, index) => (

        <div key={index} className={`mb-2 p-2 rounded-xl ${msg.userId === userId ? 'bg-gray-100 self-end text-start' : 'bg-yellow-50 self-start text-left'}`}>
            <div className="flex items-center">
                {msg.userId === 'user1' && <img className="h-6 w-6 rounded-full mr-2" src={user1Avatar} alt="User 1 avatar" />}
                    <div className="max-w-xs">{msg.text}</div>
                {msg.userId === 'user2' && <img className="h-6 w-6 rounded-full mr-2" src={user2Avatar} alt="User 2 avatar" />}
            </div>
        </div>
            
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border rounded w-full py-2 px-3 mr-2"
              placeholder="Введите сообщение..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
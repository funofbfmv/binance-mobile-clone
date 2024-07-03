const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Static Folder
app.use(express.static("public"));

const PORT = process.env.PORT || 3003;

server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

// Setup Websocket
let users = [];

io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  const id = 123456;

  if (token == undefined) {
    console.log("Token is missing");
    return next(new Error("Authentication error"));
  } else if (token != id) {
    console.log("Invalid token");
    return next(new Error("Authentication error"));
  } else {
    next();
  }
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // Отправка приветственных сообщений от бота
  // socket.emit('chat message', { sender: 'bot', message: 'Функция вывода средств приостановлена' });
  // socket.emit('chat message', { sender: 'bot', message: 'Вы можете проверить существуют ли ограничения на снятие средств для определенной криптовалюты, выбрав интересующий вас токен на странице вывода, к примеру "BTC"' });

  // Обработка отключения пользователя
  socket.on("disconnect", () => {
    const index = users.findIndex((s) => s.id == socket.id);
    if (index != -1) users.splice(index, 1);
    io.emit("online", users);
    console.log("User Disconnected");
  });

  // Обработка отправки сообщений
  socket.on("chat message", (msg) => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours <= 9) {
      hours = `0${hours}`;
    }
    if (minutes <= 9) {
      minutes = `0${minutes}`;
    }
    const message = {
      message: msg.message,
      date: `${hours}:${minutes}`,
      sender: socket.id,
      username: msg.username
    };
    io.emit("chat message", message);
  });

  // Обработка события печати
  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", `${data.name} печатает...`);
  });

  // Обработка входа пользователя
  socket.on("login", (data) => {
    users.push({
      id: socket.id,
      name: data.nickname,
    });
    io.emit("online", users);
    console.log(`${data.nickname} connected`);
  });

  // Обработка личных сообщений
  socket.on("pvChat", (data) => {
    io.to(data.to).emit("pvChat", data);
  });
});
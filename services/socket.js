const { Server } = require('socket.io');
const { languages } = require('./languages');

const socketService = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ['GET', 'POST'],
    },
  });

  const socketToRoom = new Map();
  const userInfoMap = new Map();
  const languageToRoom = new Map();
  // On user connection
  io.on('connection', (socket) => {
    socket.on('join-room', (userInfo) => {
      const { roomId } = userInfo;
      socketToRoom[socket.id] = roomId;
      userInfoMap[socket.id] = userInfo;

      if (!userInfoMap.has(roomId)) {
        userInfoMap.set(roomId, []);
        languageToRoom[roomId] = userInfo.lang;
      }

      userInfo['id'] = socket.id; // eslint-disable-line
      userInfoMap.get(roomId).push(userInfo);
      socket.join(roomId);
      io.to(roomId).emit(
        'on-join',
        userInfoMap.get(roomId),
        `${userInfo.name} joined!`,
        languageToRoom[roomId],
      );
    });
    // Language changed in room
    socket.on('language-changed', ({ lang }) => {
      const roomId = socketToRoom[socket.id];
      languageToRoom[roomId] = lang;

      io.to(roomId).emit('emit-language-changed', lang, languages[lang]);
    });

    // User changes a name
    socket.on('name-change', (userInfo) => {
      const roomId = socketToRoom[socket.id];
      const userList = userInfoMap.get(roomId);
      const index = userList.findIndex((user) => user.id === socket.id);
      userList[index].name = userInfo.name;

      io.to(roomId).emit('name-changed', userInfoMap.get(roomId));
    });

    // When someone changes input data in room
    socket.on('input-data', ({ data }) => {
      const roomId = socketToRoom[socket.id];
      io.to(roomId).emit('emit-input-data', { inputData: data });
    });

    // When someone tries to execute code
    socket.on('execute-code-start', () => {
      const roomId = socketToRoom[socket.id];
      io.to(roomId).emit('emit-execute-code-start');
    });

    // Emit the response of the execution to everyone in the room
    socket.on('code-executed', (data) => {
      const roomId = socketToRoom[socket.id];
      io.to(roomId).emit('emit-code-executed', data.data);
    });

    // When a user sends a message
    socket.on('send-message', (messageData) => {
      const roomId = socketToRoom[socket.id];
      messageData.socketId = socket.id; // eslint-disable-line no-param-reassign
      socket.broadcast.to(roomId).emit('message', messageData);
    });

    // When question data is changed
    socket.on('question-data-received', (questionData) => {
      const roomId = socketToRoom[socket.id];
      socket.broadcast
        .to(roomId)
        .emit('emit-question-data-received', questionData);
    });

    // When a user gets disconnected
    socket.on('disconnect', () => {
      const roomId = socketToRoom[socket.id];
      let userList = userInfoMap.get(roomId);
      socket.leave(roomId);
      let disconnectedUser;
      if (userList !== undefined) {
        disconnectedUser =
          userList[userList?.findIndex((user) => user.id === socket.id)];
      }
      userList = userList?.filter((u) => u.id !== socket.id);
      if (userList === undefined || !userList.length) {
        userInfoMap.delete(roomId);
      } else {
        userInfoMap.set(roomId, userList);
      }
      socket.broadcast
        .in(roomId)
        .emit('user-left', userInfoMap.get(roomId), disconnectedUser?.name);
    });
  });
};

module.exports = socketService;

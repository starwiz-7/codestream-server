const { Server } = require('socket.io');

const socketService = (httpServer) => {
  console.error(process.env.CLIENT_URL);
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

      io.to(roomId).emit('emit-language-changed', lang);
    });

    // User changes a name
    socket.on('name-change', (userInfo) => {
      const roomId = socketToRoom[socket.id];
      const userList = userInfoMap.get(roomId);
      const index = userList.findIndex((user) => user.id === socket.id);
      userList[index].name = userInfo.name;

      io.to(roomId).emit('name-changed', userInfoMap.get(roomId));
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

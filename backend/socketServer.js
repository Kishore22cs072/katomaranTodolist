const { Server } = require('socket.io');

function setupSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log('🟢 Socket connected');

    socket.on('newTask', (task) => {
      io.emit('taskCreated', task);
    });

    socket.on('disconnect', () => {
      console.log('🔴 Socket disconnected');
    });
  });
}

module.exports = { setupSocket };


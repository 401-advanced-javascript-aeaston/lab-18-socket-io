'use strict';

// from class

// create an instance of a socket server
const io = require('socket.io')(3000);

// allow connections
io.on('connection', (socket) => {
  console.log('Welcome', socket.id);

  // subscribe to an event
  socket.on('speak', (payload) => {
    console.log('.');

  // on that even send out a message to the world
  socket.broadcast.emit ('words-got-said', (payload);
  })
});




// from demo code

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('Connected', socket.id);
  socket.on('speak', (payload) => {
    console.log('.');
    socket.broadcast.emit('message', payload);
  });
  
});
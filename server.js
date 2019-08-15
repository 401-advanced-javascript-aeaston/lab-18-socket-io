'use strict';

const io = require('socket.io')(3000);
io.on('connection', (socket) => {
  console.log('Welcome', socket.id);
  socket.on('publish', (payload) => {
    try{
      if(typeof payload !=='object') {
        payload = JSON.parse(payload);
      } socket.broadcast.emit(payload.event, payload.data);
    } 
    catch(err) {console.error(err);}

  //   console.log('.');
  //   socket.broadcast.emit('save', (payload));
  // socket.on('file-error', (payload) => {
  //   console.log('.');
  //   socket.broadcast.emit('error', (payload));
  // })
  });
});

// // from class

// // allow connections
// io.on('connection', (socket) => {
//   console.log('Welcome', socket.id);

//   // subscribe to an event
//   socket.on('speak', (payload) => {
//     console.log('.');

//   // on that even send out a message to the world
//   socket.broadcast.emit('words-got-said', (payload));
//   })
// });

// // from demo code

// const io = require('socket.io')(3000);

// io.on('connection', (socket) => {
//   console.log('Connected', socket.id);
//   socket.on('speak', (payload) => {
//     console.log('.');
//     socket.broadcast.emit('message', payload);
//   });
  
// });


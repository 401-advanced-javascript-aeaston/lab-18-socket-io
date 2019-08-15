'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.on('file-save', (payload) => {
  if(payload) { // ???
    console.log('save', payload);
  }
  
});

socket.on('file-error', (payload) => {
  console.log('error', payload);
});


// // from demo code

// const io = require('socket.io-client');
// const socket = io.connect('http://localhost:3000');

// socket.on('message', (payload) => {
//   console.log('heard', payload);
// });
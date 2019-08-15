'use strict';

// starter code

const fs = require('fs');
const util = require('util');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
// const faker = require('faker');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const loadFile = (file) => readFile(file);
const saveFile = (file, buffer) => writeFile(file, buffer);
const convertBuffer = (buffer) => Buffer.from(buffer.toString().trim().toUpperCase());

const alterFile = (incomingFile) => {
  loadFile(incomingFile)
    .then(contents => convertBuffer(contents))
    .then(buffer => saveFile(incomingFile, buffer))
    .then(() => socket.emit('publish', {event: 'file-save', data: incomingFile}))
    .then(() => true)
    .catch(error => {
      socket.emit('publish', {event: 'file-error', data: error});
    })
  // fs.readFile( file, (err, data) => {
  //   if(err) { throw err; }
  //   let text = data.toString().toUpperCase();
  //   fs.writeFile( file, Buffer.from(text), (err, data) => {
  //     if(err) { throw err; }
  //     console.log(`${file} saved`);
  //   });
  // });
};

let file = process.argv.slice(2).shift();
alterFile(file);

// // from class 

// const io = require('socket.io-client');
// const socket = io.connect('http://localhost:3000');
// const faker = require('faker');

// setInterval(() => {
//   socket.emit('speak', faker.hacker.phrase());
// }, 5000);

// // from demo code

// const io = require('socket.io-client');
// const socket = io.connect('http://localhost:3000');
// const faker = require('faker');

// setInterval( () => {
//   socket.emit('speak', faker.hacker.phrase());
// }, 750);

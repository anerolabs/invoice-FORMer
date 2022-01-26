const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/former');

const db = mongoose.connection;

db.on('error', () => {
  console.log('--> Mongoose failed to connect');
});

db.once('open', () => {
  console.log('--> Mongoose connected!');
});
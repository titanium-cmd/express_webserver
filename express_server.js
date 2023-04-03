require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/usersRoutes');

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB is now connected');
  })
  .catch((error) => {
    console.log('DB not connected: ', error.message);
  });

const server = express();
server.use(express.json());
server.get('/', (_, res) => res.status(200).json({ success: true, message: 'Welcome to My Express Server' }));
server.use('/users', usersRoutes);

server.listen(8080);
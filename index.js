// import socketService from './services/socket';

const express = require('express');
const http = require('http');
const socketService = require('./services/socket');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

const server = http.createServer(app);
socketService(server);
server.listen(PORT, () => console.log('Server started!!'));

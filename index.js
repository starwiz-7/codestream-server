const express = require('express');
const http = require('http');
const cors = require('cors');
const socketService = require('./services/socket');
const apiRoute = require('./routes/api.routes');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type',
  }),
);
app.use(express.json());
app.use('/api', apiRoute);
app.use('/', (req, res) =>
  res.send(`
  <div style="height:100%; width:100%; text-align:center">
  <h1>Server is Running ;)</h1>
  <div>Codestream is hosted on Vercel
    <a href="https://codestream.vercel.app/">https://codestream.vercel.app/</a>
  </div></div>
`),
);
socketService(server);
server.listen(PORT, () => console.log('Server started!!'));
